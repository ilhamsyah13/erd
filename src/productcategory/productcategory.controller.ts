import { Controller, Get, Param } from '@nestjs/common';
import { ProductcategoryService } from './productcategory.service';

@Controller('product')
export class ProductcategoryController {
  constructor(private Services: ProductcategoryService) {}
  @Get(':id')
  public async getOne(@Param('id') id: number) {
    return await this.Services.findOne(id);
  }
}
