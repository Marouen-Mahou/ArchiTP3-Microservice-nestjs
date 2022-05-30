import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ForecastService } from './forecast.service';

@Controller('forecast')
export class ForecastController {
    constructor(private readonly forecastService: ForecastService){}

    @MessagePattern({cmd: 'forecast'})
    async getForecast(){
      try {
        const forecast = await this.forecastService.find({})
        return forecast;
        } catch(e) {
            return e
        }
    }
}
