import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanningService } from './planning.service';
import { PlanningController } from './planning.controller';
import { Planning, PlanningSchema } from './planning.schema'

@Module({
  providers: [PlanningService],
  imports:[MongooseModule.forFeature([{name: Planning.name, schema: PlanningSchema}])], 
  controllers: [PlanningController],
  exports:[PlanningService]
})
export class PlanningModule {}
