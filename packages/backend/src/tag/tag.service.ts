import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TagEntity } from "./tag.entity";
import { CreateTagDto, UpdateTagDto } from "@airlab/shared/lib/tag/dto";

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(TagEntity)
    private readonly repository: Repository<TagEntity>
  ) {}

  async create(params: CreateTagDto) {
    await this.clearCache(params.groupId);
    return this.repository.save(params);
  }

  async import(params) {
    delete params.id;
    return await this.repository.save(params);
  }

  async findById(id: number) {
    return this.repository.findOne(id, {
      select: [
        "id",
        "groupId",
        "name",
        "isMetal",
        "isFluorophore",
        "isEnzyme",
        "isBiotin",
        "isOther",
        "status",
        "description",
        "mw",
        "emission",
        "excitation",
        "createdAt",
      ],
    });
  }

  async update(id: number, params: UpdateTagDto) {
    await this.repository.update(id, params);
    const item = await this.findById(id);
    await this.clearCache(item.groupId);
    return item;
  }

  async deleteById(id: number) {
    const item = await this.findById(id);
    await this.clearCache(item.groupId);
    const result = await this.repository.delete(id);
    return result.affected === 1 ? id : undefined;
  }

  async getGroupTags(groupId: number) {
    return this.repository.find({
      select: [
        "id",
        "name",
        "isMetal",
        "isFluorophore",
        "isEnzyme",
        "isBiotin",
        "isOther",
        "status",
        "description",
        "mw",
        "emission",
        "excitation",
      ],
      where: {
        groupId: groupId,
      },
      order: {
        mw: "ASC",
      },
      cache: {
        id: `group_${groupId}_tags`,
        milliseconds: 1000 * 60 * 60,
      },
    });
  }

  async exportTags(groupId?: number) {
    return groupId
      ? this.repository.find({
          select: [
            "id",
            "groupId",
            "name",
            "isMetal",
            "isFluorophore",
            "isEnzyme",
            "isBiotin",
            "isOther",
            "status",
            "description",
            "mw",
            "emission",
            "excitation",
            "createdAt",
          ],
          where: {
            groupId: groupId,
          },
          order: {
            id: "ASC",
          },
        })
      : this.repository.find({
          select: [
            "id",
            "groupId",
            "name",
            "isMetal",
            "isFluorophore",
            "isEnzyme",
            "isBiotin",
            "isOther",
            "status",
            "description",
            "mw",
            "emission",
            "excitation",
            "createdAt",
          ],
          order: {
            id: "ASC",
          },
        });
  }

  private async clearCache(groupId: number) {
    await Promise.all([
      this.repository.manager.connection.queryResultCache.remove([`group_${groupId}_tags`]),
      this.repository.manager.connection.queryResultCache.remove([`group_${groupId}_panels`]),
    ]);
  }
}
