/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

//don't what it does souheil
 export type PlanningDocument = Planning & Document;


@Schema()
export class Planning {
  @Prop({type:String,required:true,unique:true,trime:true})
  time: string;

  @Prop({type:String,required:true,trime:true})
  event: string;
}

export const PlanningSchema = SchemaFactory.createForClass(Planning);