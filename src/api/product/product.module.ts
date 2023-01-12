import { Module } from "@nestjs/common";
import { ProductController } from "./controller/product.controller";
import { Constant } from "../../utils/contants/contants.class";
import { DataSource } from "typeorm";
import { Product } from "./entity/product.entity";
import { ProductRepository } from "./repository/product.repository";
import { ProductService } from "./service/product.service";

@Module({
    controllers: [ProductController],
    providers: [
        {
            provide: Constant.PRODUCT,
            useFactory: (dataSource: DataSource) => dataSource.getRepository(Product),
            inject: [Constant.CONECTION_DATABASE],
        },
        {
            provide: Constant.PRODUCT_REPOSITORY,
            useClass: ProductRepository
        },
        {
            provide: Constant.PRODUCT_SERVICE,
            useClass: ProductService
        }
    ]
})
export class ProductModule {}