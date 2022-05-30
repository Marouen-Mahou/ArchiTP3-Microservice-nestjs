/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

//don't what it does souheil
 export type ForecastDocument = Forecast & Document;


@Schema()
export class Forecast {
  @Prop({type:String,required:true,unique:true,trime:true})
  day: string;

  @Prop({type:String,required:true,trime:true})
  degree: string;
}

export const ForecastSchema = SchemaFactory.createForClass(Forecast);