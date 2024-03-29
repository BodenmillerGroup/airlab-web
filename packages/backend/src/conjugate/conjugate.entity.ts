import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GroupEntity } from "../group/group.entity";
import { TagEntity } from "../tag/tag.entity";
import { MemberEntity } from "../member/member.entity";
import { LotEntity } from "../lot/lot.entity";
import { UserEntity } from "../user/user.entity";
import { PanelElementEntity } from "../panelElement/panelElement.entity";
import { ConjugateStatus } from "@airlab/shared/lib/conjugate/ConjugateStatus";
import { ValidationEntity } from "../validation/validation.entity";

@Entity({
  name: "conjugate",
})
export class ConjugateEntity {
  @PrimaryGeneratedColumn({
    name: "id",
  })
  id: number;

  @Column({
    name: "group_id",
  })
  groupId: number;

  @Column({
    name: "created_by",
  })
  createdBy: number;

  @Column({
    name: "lot_id",
  })
  lotId: number;

  @Column({
    name: "tag_id",
  })
  tagId: number;

  @Column({
    name: "labeled_by",
  })
  labeledBy: number;

  @Column({
    name: "finished_by",
  })
  finishedBy: number;

  @Column({
    name: "status",
  })
  status: ConjugateStatus;

  @Column({
    name: "tube_number",
  })
  tubeNumber: number;

  @Column({
    name: "concentration",
  })
  concentration: number;

  @Column({
    name: "description",
  })
  description: string;

  @Column({
    name: "is_archived",
  })
  isArchived: boolean;

  @Column({
    name: "meta",
    type: "jsonb",
  })
  meta: object;

  @Column({
    name: "finished_at",
  })
  finishedAt: string;

  @Column({
    name: "created_at",
  })
  createdAt: string;

  @Column({
    name: "updated_at",
  })
  updatedAt: string;

  @Column({
    name: "custom_id",
  })
  customId: string;

  @ManyToOne((type) => GroupEntity, (group) => group.conjugates)
  @JoinColumn({ name: "group_id" })
  group: GroupEntity;

  @ManyToOne((type) => MemberEntity)
  @JoinColumn({ name: "created_by" })
  member: MemberEntity;

  @ManyToOne((type) => MemberEntity)
  @JoinColumn({ name: "labeled_by" })
  labeledByMember: MemberEntity;

  @ManyToOne((type) => MemberEntity)
  @JoinColumn({ name: "finished_by" })
  finishedByMember: MemberEntity;

  user: UserEntity;

  @ManyToOne((type) => TagEntity)
  @JoinColumn({ name: "tag_id" })
  tag: TagEntity;

  @ManyToOne((type) => LotEntity)
  @JoinColumn({ name: "lot_id" })
  lot: LotEntity;

  @OneToMany((type) => PanelElementEntity, (element) => element.panel)
  elements!: PanelElementEntity[];

  @OneToMany((type) => ValidationEntity, (validation) => validation.conjugate)
  validations: ValidationEntity[];
}
