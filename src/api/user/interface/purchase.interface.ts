import { User } from "../entity/user.entity";
import { Product } from "../../product/entity/product.entity";

/**
 * Interfaz para el tipado de las compras realizadas
 * @interface IPurchase
 * Leonardo Castillo - yorchcastillo4@gmail.com
 */
export interface IPurchase {
    id?: number;
    createdAt?: Date;
    updatedAt?: Date;
    active?: boolean;
    deletedAt?: Date;
    user: User;
    product: Product[];
    total: number;
}