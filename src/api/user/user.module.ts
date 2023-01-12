import { Module } from "@nestjs/common";
import { UserController } from "./controller/user.controller";
import { Constant } from "../../utils/contants/contants.class";
import { UserService } from "./service/user.service";
import { DataSource } from "typeorm";
import { User } from "./entity/user.entity";
import { UserRepository } from "./repository/user.repository";
import { Quotes } from "./entity/quotes.entity";
import { Purchases } from "./entity/purchases.entity";

@Module({
    controllers: [UserController],
    providers: [
        {
            provide: Constant.USER,
            useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
            inject: [Constant.CONECTION_DATABASE],
        },
        {
            provide: Constant.USER_REPOSITORY,
            useClass: UserRepository
        },
        {
            provide: Constant.USER_SERVICE,
            useClass: UserService
        },
        {
            provide: Constant.PURCHASE,
            useFactory: (dataSource: DataSource) => dataSource.getRepository(Purchases),
            inject: [Constant.CONECTION_DATABASE]
        },
        {
            provide: Constant.QUOTE,
            useFactory: (dataSource: DataSource) => dataSource.getRepository(Quotes),
            inject: [Constant.CONECTION_DATABASE],
        }
    ]
})
export class UserModule {
}