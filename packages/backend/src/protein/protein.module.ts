import { Module } from "@nestjs/common";
import { ProteinService } from "./protein.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProteinEntity } from "./protein.entity";
import { ProteinController } from "./protein.controller";
import { MemberModule } from "../member/member.module";

@Module({
  imports: [TypeOrmModule.forFeature([ProteinEntity]), MemberModule],
  providers: [ProteinService],
  controllers: [ProteinController],
  exports: [ProteinService],
})
export class ProteinModule {}
