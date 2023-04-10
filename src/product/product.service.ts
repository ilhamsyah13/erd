import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'output/entities/Product';
import { ProductCategory } from 'output/entities/ProductCategory';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private serviceRepo: Repository<Product>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find({
      relations: { category: true },
    });
  }

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({
      where: { id: id },
      relations: { category: true },
    });
  }

  public async create(fields: any) {
    try {
      const productCategory = await this.serviceRepo.save({
        name: fields.name,
        description: fields.description,
        price: fields.price,
        category: fields.category,
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
        price: fields.price,
        category: fields.category,
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

  public async Upload(
    file: any,
    productDetail: {
      name: string;
      description: string;
      price: string;
      category: ProductCategory;
    },
  ) {
    try {
      const region = await this.serviceRepo.save({
        ...productDetail,
        image: file.originalname,
        createdat: new Date(),
        updatedat: new Date(),
      });
      return region;
    } catch (error) {
      return error.message;
    }
  }
  public async UploadUpdate(
    id: number,
    file: any,
    productDetail: {
      name: string;
      description: string;
      price: string;
      category: ProductCategory;
    },
  ) {
    try {
      const region = await this.serviceRepo.update(id, {
        ...productDetail,
        image: file.originalname,
        updatedat: new Date(),
      });
      return region;
    } catch (error) {
      return error.message;
    }
  }
}
