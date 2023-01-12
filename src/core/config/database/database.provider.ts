import { DataSource } from "typeorm";
import { Constant } from "../../../utils/contants/contants.class";
import { User } from "../../../api/user/entity/user.entity";
import { Product } from "../../../api/product/entity/product.entity";
import { Quotes } from "../../../api/user/entity/quotes.entity";
import { Purchases } from "../../../api/user/entity/purchases.entity";

/**
 * Provider de configuracion de la base de datos
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
export const databaseProviders = [
    {
        provide: Constant.CONECTION_DATABASE,
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'root',
                password: 'admin',
                database: 'store',
                entities: [
                    User, Product, Quotes, Purchases
                ],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];