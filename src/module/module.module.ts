import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from 'output/entities/Customer';
import { OrderDetail } from 'output/entities/OrderDetail';
import { Orders } from 'output/entities/Orders';
import { Product } from 'output/entities/Product';
import { ProductCategory } from 'output/entities/ProductCategory';
import { Users } from 'output/entities/Users';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { LocalStrategy } from 'src/auth/local.strategy';
import { CostumersController } from 'src/costumers/costumers.controller';
import { CostumersService } from 'src/costumers/costumers.service';
import { ConfigMulter } from 'src/multer/multer.middleware';
import { OrderDetailController } from 'src/order-detail/order-detail.controller';
import { OrderDetailService } from 'src/order-detail/order-detail.service';
import { OrdersController } from 'src/orders/orders.controller';
import { OrdersService } from 'src/orders/orders.service';
import { ProductController } from 'src/product/product.controller';
import { ProductService } from 'src/product/product.service';
import { ProductcategoryController } from 'src/productcategory/productcategory.controller';
import { ProductcategoryService } from 'src/productcategory/productcategory.service';
import { UsersController } from 'src/users/users.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Customer,
      OrderDetail,
      Orders,
      Product,
      ProductCategory,
      Users,
    ]),
    PassportModule,
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '2d' },
    }),
    MulterModule.register(ConfigMulter.Uploadfiles()),
  ],
  providers: [
    UsersService,
    LocalStrategy,
    JwtStrategy,
    ProductcategoryService,
    CostumersService,
    OrdersService,
    ProductService,
    OrderDetailService,
  ],
  controllers: [
    UsersController,
    ProductcategoryController,
    CostumersController,
    OrdersController,
    ProductController,
    OrderDetailController,
  ],
  exports: [UsersService],
})
export class ModuleModule {}
