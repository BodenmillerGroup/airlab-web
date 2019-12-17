import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ReagentEntity } from "./reagent.entity";
import { CreateReagentDto, UpdateReagentDto } from "@airlab/shared/lib/reagent/dto";
import { UserEntity } from "../user/user.entity";

@Injectable()
export class ReagentService {
  constructor(
    @InjectRepository(ReagentEntity)
    private readonly repository: Repository<ReagentEntity>
  ) {}

  async create(params: CreateReagentDto) {
    await this.clearCache(params.groupId);
    return this.repository.save(params);
  }

  async findById(id: number) {
    return this.repository.findOne(id, {
      select: ["id", "groupId", "name", "reference", "meta"],
    });
  }

  async update(id: number, params: UpdateReagentDto) {
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

  async getGroupReagents(groupId: number) {
    return this.repository
      .createQueryBuilder("reagent")
      .select(["reagent.id", "reagent.name", "reagent.reference", "reagent.meta"])
      .leftJoin("reagent.provider", "provider")
      .addSelect(["provider.id", "provider.name"])
      .leftJoin("reagent.member", "member")
      .leftJoinAndMapOne("reagent.user", UserEntity, "user", "member.userId = user.id")
      .where({
        groupId: groupId,
        isDeleted: false,
      })
      .orderBy("reagent.id", "DESC")
      .cache(`group_${groupId}_reagents`, 1000 * 60 * 60)
      .getMany();
  }

  async getProviderReagents(providerId: number) {
    return this.repository
      .createQueryBuilder("reagent")
      .select(["reagent.id", "reagent.name", "reagent.reference", "reagent.meta"])
      .leftJoin("reagent.member", "member")
      .leftJoinAndMapOne("reagent.user", UserEntity, "user", "member.userId = user.id")
      .where({
        providerId: providerId,
        isDeleted: false,
      })
      .orderBy("reagent.id", "DESC")
      .getMany();
  }

  private async clearCache(groupId: number) {
    await this.repository.manager.connection.queryResultCache.remove([`group_${groupId}_reagents`]);
  }
}
