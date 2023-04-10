import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductCategory } from 'output/entities/ProductCategory';
import { join } from 'path';
import { of } from 'rxjs';

@Controller('product')
export class ProductController {
  constructor(private Services: ProductService) {}
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

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  public async upload(
    @UploadedFile() file,
    @Body()
    createProduct: {
      name: string;
      description: string;
      price: string;
      category: ProductCategory;
    },
  ) {
    return await this.Services.Upload(file, createProduct);
  }

  @Put('/upload/:id')
  @UseInterceptors(FileInterceptor('file'))
  public async uploadUpdate(
    @Param('id') id: number,
    @UploadedFile() file,
    @Body()
    createProduct: {
      name: string;
      description: string;
      price: string;
      category: ProductCategory;
    },
  ) {
    return await this.Services.UploadUpdate(id, file, createProduct);
  }
  @Get('image/:imagename')
  findImage(@Param('imagename') imagename, @Res() res) {
    return of(res.sendFile(join(process.cwd(), 'uploads/' + imagename)));
  }
}
