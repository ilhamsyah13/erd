import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';

@Controller('orderdetail')
export class OrderDetailController {
  constructor(private Services: OrderDetailService) {}
  @Get()
  public async getAll() {
    return await this.Services.findAll();
  }
  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }
  @Post()
  public async create(
    @Body()
    fields: any,
  ) {
    return await this.Services.create(fields);
  }
  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body()
    fields: any,
  ) {
    return await this.Services.update(id, fields);
  }
  @Delete(':id')
  public async delete(@Param('id') id: number) {
    return await this.Services.delete(id);
  }
}
