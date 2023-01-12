import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { User } from "./user.entity";
import { Product } from "../../product/entity/product.entity";
import { BaseEnty } from "../../../core/base/base.entity";

/**
 * Entidad de la compra.
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
@Entity()
export class Purchases extends BaseEnty{

    @ManyToOne(() => User, (user) => user.purchases)
    user: User;

    @ManyToMany(() => Product)
    @JoinTable()
    product: Product[];

    @Column()
    total: number;
}