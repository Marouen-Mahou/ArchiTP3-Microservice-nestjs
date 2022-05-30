import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {  FilterQuery, Model, UpdateQuery , Document } from 'mongoose';

/**
 * Abstract base service that other services can extend to provide base CRUD
 * functionality such as to create, find, update and delete data.
 */
@Injectable()
export abstract class GenericService<T extends Document> {
  private readonly modelName: string;
  /**
   * The constructor must receive the injected model from the child service in
   * order to provide all the proper base functionality.
   *
   * @param {Model} model - The injected model.
   */
  constructor(
    private readonly model: Model<T>,
  ) {
    // Services who extend this service already contain a property called
    for (const modelName of Object.keys(model.collection.conn.models)) {
      if (model.collection.conn.models[modelName] === this.model) {
        this.modelName = modelName;
        break;
      }
    }
  }

  /**
   * Find  entries and return the result.
   *
   * @throws InternalServerErrorException
   */
   async find(
    conditions: Partial<Record<keyof T, unknown>>,populate=[],
    projection: string | Record<string, unknown> = {},
    options: Record<string, unknown> = {},
  ): Promise<T[]> {
      return await this.model.find(
        conditions as FilterQuery<T>,
        projection,
        options,
      ).populate(populate);
  }

  
  async create ( data :FilterQuery<T>,  ): Promise<T> {     
      return new this.model(data).save() ;
  }

  async findOneAndUpdate(query: FilterQuery<T>, data: UpdateQuery<Partial<T>> ={}, options: Record<string, unknown> = {},): Promise<T> {
    return this.model.findOneAndUpdate(query, data,options) ;
  }
}