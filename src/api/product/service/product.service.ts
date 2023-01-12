import { Inject, Injectable } from "@nestjs/common";
import { Constant } from "../../../utils/contants/contants.class";
import { ProductRepository } from "../repository/product.repository";
import { IProduct } from "../interface/product.interface";
import { Product } from "../entity/product.entity";

/**
 * Clase de servicios para los datos de los prodcutos
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
@Injectable()
export class ProductService {

    @Inject(Constant.PRODUCT_REPOSITORY) private readonly _productRepository: ProductRepository;

    /**
     * Guardar un prodcuto
     * @param {IProduct} params
     * @return {Promise<IProduct>}
     */
    save(params: IProduct): Promise<IProduct> {
        const product = new Product();
        product.title = params.title;
        product.description = params.description;
        product.price = params.price;
        product.stock = params.stock;
        product.urlPhoto = params.urlPhoto;
        product.createdAt = new Date();
        return this._productRepository.save(product);
    }

    /**
     * Obtener totods los prductos
     * @return {Promise<Product[]>}
     */
    queryAll(): Promise<Product[]> {
        return this._productRepository.queryAll();
    }
}