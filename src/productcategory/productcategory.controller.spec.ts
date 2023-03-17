import { Test, TestingModule } from '@nestjs/testing';
import { ProductcategoryController } from './productcategory.controller';

describe('ProductcategoryController', () => {
  let controller: ProductcategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductcategoryController],
    }).compile();

    controller = module.get<ProductcategoryController>(ProductcategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
