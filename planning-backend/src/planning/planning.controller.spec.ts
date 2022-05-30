import { Test, TestingModule } from '@nestjs/testing';
import { PlanningController } from './planning.controller';

describe('PlanningController', () => {
  let controller: PlanningController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanningController],
    }).compile();

    controller = module.get<PlanningController>(PlanningController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
