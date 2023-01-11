import { Entity, Column, ManyToOne } from "typeorm";
import { BaseEnty } from "../../../core/base/base.entity";

import { Getters, Setters} from 'node-lombok';
import { Quotes } from "./quotes.entity";

@Getters() @Setters()
@Entity()
export class User extends BaseEnty {

    @Column({type: 'varchar'})
    private name: string;

    @Column({type: 'varchar', name: 'last_names'})
    private lastNames: string;

    @Column({type: 'int', name: 'identification_card'})
    private identificationCard: number;

    @Column({type: 'varchar'})
    private email: string;

    @Column({type: 'int'})
    private telephone: number;

    @ManyToOne(() => Quotes, (quotes) => quotes.user)
    quotes: Quotes;
}