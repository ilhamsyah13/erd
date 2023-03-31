import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductcategoryService } from './productcategory.service';

@Controller('prodcat')
export class ProductcategoryController {
  constructor(private Services: ProductcategoryService) {}
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
