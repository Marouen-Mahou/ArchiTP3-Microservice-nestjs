import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PlanningService } from './planning.service';

@Controller('planning')
export class PlanningController {
    constructor(private readonly planningService: PlanningService){}

    @MessagePattern({cmd: 'planning'})
    async getPlanning(){
      try {
        const planning = await this.planningService.find({})
        return planning;
        } catch(e) {
            return e
        }
    }
}
