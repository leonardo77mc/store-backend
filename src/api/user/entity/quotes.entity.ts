import { Column, Entity, OneToMany } from "typeorm";
import { BaseEnty } from "../../../core/base/base.entity";
import { User } from "./user.entity";

/**
 * Entidad del cupo disponible.
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
@Entity()
export class Quotes extends BaseEnty {

    @Column({name: 'value_quote'})
    valueQuote: number;

    @OneToMany(() => User, (user) => user.quotes)
    user: User[];
}
