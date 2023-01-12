import { Entity, Column, ManyToOne, OneToMany } from "typeorm";
import { BaseEnty } from "../../../core/base/base.entity";

import { Quotes } from "./quotes.entity";
import { Purchases } from "./purchases.entity";

/**
 * Entidad del usuario.
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
@Entity()
export class User extends BaseEnty {

    @Column()
    public name: string;

    @Column({name: 'last_names'})
    public lastNames: string;

    @Column({name: 'identification_card'})
    public identificationCard: number;

    @Column()
    public email: string;

    @Column()
    public telephone: string;

    @ManyToOne(() => Quotes, (quotes) => quotes.user)
    public quotes: Quotes;

    @OneToMany(() => Purchases, (purchases) => purchases.user)
    purchases: Purchases[];
}
