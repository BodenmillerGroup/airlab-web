import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FileEntity } from "./file.entity";
import { CreateFileDto, UpdateFileDto } from "./file.dto";

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private readonly repository: Repository<FileEntity>
  ) {}

  async findAll() {
    return this.repository.find();
  }

  async create(params: CreateFileDto) {
    return this.repository.save(params);
  }

  async update(id: number, params: UpdateFileDto) {
    return this.repository.update(id, params);
  }

  async findById(id: number) {
    return this.repository.findOne({
      where: {
        id: id,
      },
    });
  }

  async getAllFilesForGroup(groupId: number) {
    return this.repository.find({
      where: {
        groupId: groupId,
      },
    });
  }

  async getAllFilesForUserGroup(userGroupId: number) {
    return this.repository.find({
      where: {
        createdBy: userGroupId,
      },
    });
  }

  async getFileHash(fileId: number) {
    return this.repository.find({
      select: ["hash", "extension"],
      where: {
        id: fileId,
      },
    });
  }
}