import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GroupEntity } from "../group/group.entity";
import { TagEntity } from "../tag/tag.entity";
import { MemberEntity } from "../member/member.entity";
import { LotEntity } from "../lot/lot.entity";
import { UserEntity } from "../user/user.entity";
import { PanelElementEntity } from "../panelElement/panelElement.entity";

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
    name: "status",
  })
  status: number;

  @Column({
    name: "tube_number",
  })
  tubeNumber: number;

  @Column({
    name: "concentration",
  })
  concentration: string;

  @Column({
    name: "description",
  })
  description: string;

  @Column({
    name: "is_deleted",
  })
  isDeleted: boolean;

  @Column({
    name: "meta",
    type: "jsonb",
  })
  meta: object;

  @Column({
    name: "labeled_at",
  })
  labeledAt: string;

  @Column({
    name: "created_at",
  })
  createdAt: string;

  @Column({
    name: "updated_at",
  })
  updatedAt: string;

  @ManyToOne(
    type => GroupEntity,
    group => group.conjugates
  )
  @JoinColumn({ name: "group_id" })
  group: GroupEntity;

  @ManyToOne(type => MemberEntity)
  @JoinColumn({ name: "created_by" })
  member: MemberEntity;

  user: UserEntity;

  @ManyToOne(type => TagEntity)
  @JoinColumn({ name: "tag_id" })
  tag: TagEntity;

  @ManyToOne(type => LotEntity)
  @JoinColumn({ name: "lot_id" })
  lot: LotEntity;

  @OneToMany(
    type => PanelElementEntity,
    element => element.panel
  )
  elements!: PanelElementEntity[];
}
