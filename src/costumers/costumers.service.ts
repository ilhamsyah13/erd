import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'output/entities/Customer';
import { Repository } from 'typeorm';

@Injectable()
export class CostumersService {
  constructor(
    @InjectRepository(Customer)
    private serviceRepo: Repository<Customer>,
  ) {}

  public async findAll() {
    return await this.serviceRepo.find();
  }
}
