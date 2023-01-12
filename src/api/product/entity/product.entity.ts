import { Entity, Column, ManyToOne } from "typeorm";
import { BaseEnty } from "../../../core/base/base.entity";
import { Purchases } from "../../user/entity/purchases.entity";

/**
 * Entidad del producto.
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
@Entity()
export class Product extends BaseEnty {

    @Column()
    public title: string;

    @Column()
    public description: string;

    @Column()
    public price: number;

    @Column()
    public stock: number;

    @Column({name: 'url_photo'})
    public urlPhoto: string;
}