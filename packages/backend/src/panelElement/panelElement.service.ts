import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PanelElementEntity } from "./panelElement.entity";
import { PanelElementDataDto } from "@airlab/shared/lib/panel/dto";

@Injectable()
export class PanelElementService {
  constructor(
    @InjectRepository(PanelElementEntity)
    private readonly repository: Repository<PanelElementEntity>
  ) {}

  async import(params) {
    delete params.id;
    return await this.repository.save(params);
  }

  async updatePanelElements(panelId: number, elements: PanelElementDataDto[]) {
    await this.repository.delete({
      panelId: panelId,
    });
    const data = elements.map((item) => {
      return {
        panelId: panelId,
        conjugateId: item.conjugateId,
        dilutionType: item.dilutionType,
        concentration: item.concentration,
      };
    });
    await this.repository.save(data);
  }

  async findByPanelIdAndConjugateId(panelId: number, conjugateId: number) {
    return this.repository.findOne({
      panelId: panelId,
      conjugateId: conjugateId,
    });
  }

  async findPanelElements(panelId: number) {
    return this.repository
      .createQueryBuilder("element")
      .where({
        panelId: panelId,
      })
      .leftJoin("element.conjugate", "conjugate")
      .addSelect(["conjugate.id", "conjugate.tubeNumber"])
      .leftJoin("conjugate.lot", "lot")
      .addSelect(["lot.id", "lot.name"])
      .getMany();
  }

  async exportPanelElements(groupId?: number) {
    let query = this.repository.createQueryBuilder("element");

    if (groupId) {
      query = query.leftJoin("element.panel", "panel").where("panel.groupId = :groupId", { groupId: groupId });
    }

    return query.orderBy("element.id", "ASC").getMany();
  }
}
