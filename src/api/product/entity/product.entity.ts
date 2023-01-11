import { Entity, Column } from "typeorm";
import { BaseEnty } from "../../../core/base/base.entity";

import { Getters, Setters} from 'node-lombok';

@Getters() @Setters()
@Entity()
export class Product extends BaseEnty {

    @Column({type: 'varchar'})
    private title: string;

    @Column({type: 'varchar'})
    private description: string;

    @Column({type: 'int'})
    private price: number;

    @Column({type: 'int'})
    private stock: number;
}