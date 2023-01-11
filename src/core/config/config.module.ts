import {DynamicModule, Global, Module} from "@nestjs/common";
import {Constant} from "../../utils/contants/contants.class";
import {ConfigService} from "./config.service";

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