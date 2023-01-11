import { Entity, OneToMany } from "typeorm";
import { BaseEnty } from "../../../core/base/base.entity";
import { User } from "./user.entity";

@Entity()
export class Quotes extends BaseEnty {

    @OneToMany(() => User, (user) => user.quotes)
    user: User[]

}
