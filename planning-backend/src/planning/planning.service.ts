import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { GenericService } from 'src/generic/generic.service';
import { Planning, PlanningDocument } from "./planning.schema";

@Injectable()
export class PlanningService extends GenericService<PlanningDocument>{
    constructor(@InjectModel(Planning.name) private planningModel: Model<PlanningDocument>) {
        super(planningModel);
    }
}
