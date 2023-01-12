import {DynamicModule, Global, Module} from "@nestjs/common";
import {Constant} from "../../utils/contants/contants.class";
import {ConfigService} from "./config.service";

/**
 * Modulo dinamico para la configuracion de variables de entornos
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
@Global()
@Module({})
export class ConfigModule {

    static register(option): DynamicModule {
        return {
            module: ConfigModule,
            providers: [
                {
                    provide: Constant.OPTIONS_CONFIG,
                    useValue: option
                },
                ConfigService],
            exports: [ConfigService]
        };
    }
}