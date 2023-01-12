import { Inject, Injectable } from "@nestjs/common";
import { Constant } from "../../../utils/contants/contants.class";
import { Repository } from "typeorm";
import { Product } from "../entity/product.entity";
import { IProduct } from "../interface/product.interface";

/**
 * Clase de repositorio para los datos de los prodcutos
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
@Injectable()
export class ProductRepository {

    @Inject(Constant.PRODUCT) private readonly _product: Repository<Product>;

    /**
     * Guardar un prodcuto
     * @param {IProduct} params
     * @return {Promise<IProduct>}
     */
    save(product: IProduct): Promise<IProduct> {
        return this._product.manager.save(product);
    }

    /**
     * Obtener totods los prductos
     * @return {Promise<Product[]>}
     */
    queryAll(): Promise<Product[]> {
        return this._product.find();
    }
}