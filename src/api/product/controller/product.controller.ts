import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { Constant } from "../../../utils/contants/contants.class";
import { ProductService } from "../service/product.service";
import { Product } from "../entity/product.entity";
import { IProduct } from "../interface/product.interface";
import { ProductoDto } from "../DTO/producto.dto";

/**
 * Controllador para el flujo de datos productos.
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
@Controller()
export class ProductController {

    @Inject(Constant.PRODUCT_SERVICE) private readonly _productService: ProductService;

    /**
     * Metodo para guardar un producto
     * @param {ProductDTO} params
     * @return {Promise<IProduct>}
     */
    @Post('save')
    save(@Body() params: ProductoDto): Promise<IProduct> {
        try {
            return this._productService.save(params);
        } catch (e) {
            // todo manejar con log4js
            console.error(e.message);
        }
    }

    /**
     * Metodo para obtener todos los prodcutos
     * @return {Promise<Product[]>}
     */
    @Get('all')
    queryAll(): Promise<Product[]> {
        try {
            return this._productService.queryAll();
        } catch (e) {
            // todo manejar con log4js
            console.error(e.message);
        }
    }
}