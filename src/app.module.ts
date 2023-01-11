import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "./core/config/config.module";
import { DatabaseModule } from './core/config/database/database.module';

@Module({
  imports: [
    ConfigModule.register({ folder: './env' }),
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
