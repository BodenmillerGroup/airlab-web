import { Test, TestingModule } from "@nestjs/testing";
import { PanelService } from "./panel.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PanelEntity } from "./panel.entity";
import { MemberModule } from "../member/member.module";

describe(PanelService.name, () => {
  let service: PanelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([PanelEntity]), MemberModule],
      providers: [PanelService],
    }).compile();

    service = module.get<PanelService>(PanelService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
