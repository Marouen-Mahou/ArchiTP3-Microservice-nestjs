import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ForecastService } from './forecast.service';
import { ForecastController } from './forecast.controller';
import { Forecast, ForecastSchema } from './forecast.schema'

@Module({
  providers: [ForecastService],
  imports:[MongooseModule.forFeature([{name: Forecast.name, schema: ForecastSchema}])], 
  controllers: [ForecastController],
  exports:[ForecastService]
})
export class ForecastModule {}
