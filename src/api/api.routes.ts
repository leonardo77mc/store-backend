import { Routes } from "@nestjs/core";
import { ApiModule } from "./api.module";
import { UserModule } from "./user/user.module";
import { ProductModule } from "./product/product.module";

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