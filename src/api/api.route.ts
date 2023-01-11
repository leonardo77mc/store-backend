import { Routes } from "@nestjs/core";
import { ApiModule } from "./api.module";

const routes: Routes = [
    {
        path: 'api',
        module: ApiModule,
        children: [

        ]
    }
]