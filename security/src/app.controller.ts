import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/forecast/:pwd")
  async getForecast(@Param() params: any) {
    return this.appService.getForecast(params.pwd);
  }

  @Get("/planning/:pwd")
  async getPlanning(@Param() params: any) {
    return this.appService.getPlanning(params.pwd);
  }

  @Get("/greeting-async")
  async getHelloAsync() {
    return this.appService.getHelloAsync();
  }
}
