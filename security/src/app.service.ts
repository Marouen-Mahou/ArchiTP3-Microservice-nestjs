import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(@Inject('GREETING_SERVICE') private client: ClientProxy){}

  async getForecast(password:string){
    const pwd:string = 'GL4'
    if(password === pwd) {
      return this.client.send({cmd: 'forecast'}, '');
    } else {
      return 'Not authorised'
    }
  }

  async getPlanning(password:string){
    const pwd:string = 'GL4'
    if(password === pwd) {
      return this.client.send({cmd: 'planning'}, '');
    } else {
      return 'Not authorised'
    }
  }

  async getHelloAsync() {
    const message = await this.client.send({cmd: 'greeting-async'}, 'Progressive Coder');
    return message;
  }
}
