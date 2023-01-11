import { DataSource } from "typeorm";
import { Constant } from "../../../utils/contants/contants.class";

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
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];