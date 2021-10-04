import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Controller('products')
export class ProductsController {
  constructor(private service: ProductService) {}

  @Get()
  getAll(): Product[] {
    return this.service.products;
  }

  @Get(':id')
  getById(@Param() params): Product {
    return this.service.getById(params.id);
  }

  @Post()
  create(@Body() product): Product {
    return this.service.create(product);
  }

  @Put(':id')
  update(@Param() params, @Body() product): Product {
    return this.service.update(params.id, product);
  }

  @Delete(':id')
  remove(@Param() params): void {
    this.service.remove(params.id);
  }
}
