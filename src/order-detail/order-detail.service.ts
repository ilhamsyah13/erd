import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetail } from 'output/entities/OrderDetail';
import { Repository } from 'typeorm';

@Injectable()
export class OrderDetailService {
  constructor(
    @InjectRepository(OrderDetail)
    private serviceRepo: Repository<OrderDetail>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find({
      relations: { order: true, product: true },
    });
  }

  public async findOne(id: number) {
    return await this.serviceRepo.findOne({
      where: { id: id },
      relations: { order: true, product: true },
    });
  }

  public async create(fields: any) {
    try {
      const productCategory = await this.serviceRepo.save({
        order: fields.order,
        product: fields.product,
        quantity: fields.quantity,
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
        order: fields.order,
        product: fields.product,
        quantity: fields.quantity,
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
