/**
 * Interfaz para el tipado del producto.
 * @interface IProduct
 * Leonardo Castillo - yorchcastillo4@gmail.com
 */
export interface IProduct {
    id?: number;
    createdAt?: Date;
    updatedAt?: Date;
    active?: boolean;
    deletedAt?: Date;
    title: string;
    description: string;
    price: number;
    stock: number;
    urlPhoto: string;
}