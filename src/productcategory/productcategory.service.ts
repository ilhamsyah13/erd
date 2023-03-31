import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductCategory } from 'output/entities/ProductCategory';
import { Repository } from 'typeorm';

@Injectable()
export class ProductcategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private serviceRepo: Repository<ProductCategory>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find({
      relations: { products: true },
    });
  }

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({
      where: { id: id },
      relations: { products: true },
    });
  }

  public async create(fields: any) {
    try {
      const productCategory = await this.serviceRepo.save({
        name: fields.name,
        description: fields.description,
        createdat: new Date(),
        updatedat: new Date(),
      });
      return productCategory;
    } catch (error) {
      return error.message;
    }
  }

  public async update(id: number, fields: any) {
    try {
      const productCategory = await this.serviceRepo.update(id, {
        name: fields.name,
        description: fields.description,
        updatedat: new Date(),
      });
      return productCategory;
    } catch (error) {
      return error.message;
    }
  }

  public async delete(id: number) {
    try {
      const productCategory = await this.serviceRepo.delete(id);
      return productCategory;
    } catch (error) {
      return error.message;
    }
  }
}
