import { Inject, Injectable } from "@nestjs/common";

import * as path from "path";
import * as fs from "fs";
import * as dotenv from 'dotenv';
import * as Joi from "joi";

import { EnvConfig } from "../types/env-config.type";
import { Constant } from "../../utils/contants/contants.class";

/**
 * Servicio para manejar la configuracion de las variables de entorno
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
@Injectable()
export class ConfigService {

    private readonly envConfig: EnvConfig;

    /**
     * @constructor
     * @param {string} options
     */
    constructor(@Inject(Constant.OPTIONS_CONFIG) private options) {
        const filePath = `${process.env.NODE_ENV || 'development'}.env`;
        const envFile = path.resolve(options.folder, filePath);
        this.envConfig = dotenv.parse(fs.readFileSync(envFile));
        this.validation(this.envConfig);
    }

    get(key: string): string {
        return this.envConfig[key];
    }

    getLOGYAML(): string {
        return this.envConfig['LOGYAML'];
    }

    /**
     * Methtodo para validar las variables de entornos configuradas y hacerlas requeridas.
     * @param {EnvConfig} envConfig
     * @return {Promise}
     */
    async validation(envConfig: EnvConfig): Promise<any> {
        const validationSchema = Joi.object({
            PORT: Joi.number().required(),
            LOGYAML: Joi.string().required(),
            HOST: Joi.string().required(),
            PORT_DATABASE: Joi.number().required(),
            USERNAME_DATABASE: Joi.string().required(),
            PASSWORD_DATABASE: Joi.string().required(),
            NAME_DATABASE: Joi.string().required()
        });
        let success = null;
        try {
            success = await validationSchema.validateAsync(envConfig);
        } catch (e) {
            throw new Error(`${global.logYml.error_load_config_environment}${e.message}`);
        }
        return success;
    }

}