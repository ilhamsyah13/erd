import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders } from 'output/entities/Orders';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private serviceRepo: Repository<Orders>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find({
      relations: { user: true },
    });
  }

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({
      where: { id: id },
      relations: { user: true },
    });
  }

  public async create(fields: any) {
    try {
      const productCategory = await this.serviceRepo.save({
        totalproduct: fields.totalproduct,
        totalprice: fields.totalprice,
        user: fields.user,
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
        totalproduct: fields.totalproduct,
        totalprice: fields.totalprice,
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
