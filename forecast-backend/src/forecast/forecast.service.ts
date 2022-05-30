import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { GenericService } from 'src/generic/generic.service';
import { Forecast, ForecastDocument } from "./forecast.schema";

@Injectable()
export class ForecastService extends GenericService<ForecastDocument>{
    constructor(@InjectModel(Forecast.name) private forecastModel: Model<ForecastDocument>) {
        super(forecastModel);
    }
}
