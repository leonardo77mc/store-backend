import { Global, Module } from '@nestjs/common';
import { databaseProviders } from './database.provider';

/**
 * Modulo global para el acceso a base de datos entre modulos
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
@Global()
@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule {
}