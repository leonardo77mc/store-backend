import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "./core/config/config.module";
import { DatabaseModule } from './core/config/database/database.module';
import { RouterModule } from "@nestjs/core";
import { routes } from "./api/api.routes";
import { ApiModule } from "./api/api.module";

@Module({
    imports: [
        ConfigModule.register({ folder: './env' }),
        DatabaseModule,
        RouterModule.register(routes),
        ApiModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
