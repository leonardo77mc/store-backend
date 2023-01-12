import { Routes } from "@nestjs/core";
import { ApiModule } from "./api.module";
import { UserModule } from "./user/user.module";
import { ProductModule } from "./product/product.module";

/**
 * Modulo de rutas dinamicas
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
export const routes: Routes = [
    {
        path: 'api',
        module: ApiModule,
        children: [
            {
                path: 'user',
                module: UserModule,
            },
            {
                path: 'product',
                module: ProductModule,
            },
        ],
    },
];