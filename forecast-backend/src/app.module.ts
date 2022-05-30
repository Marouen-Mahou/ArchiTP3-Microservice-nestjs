import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ForecastModule } from './forecast/forecast.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ForecastModule,
    MongooseModule.forRoot('mongodb+srv://petsi:petsi@cluster0.mrwox.mongodb.net/forecast'),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
