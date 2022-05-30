import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanningModule } from './planning/planning.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PlanningModule,
    MongooseModule.forRoot('mongodb+srv://petsi:petsi@cluster0.mrwox.mongodb.net/planning'),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
