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

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({
      where: { id: id },
      relations: { products: true },
    });
  }
}
