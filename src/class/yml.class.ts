import * as fs from 'fs';
import * as yaml from 'js-yaml';

/**
 * Clase para manejar informacion por un archivo yml
 * @author Leonardo Castillo - yorchcastillo4@gmail.com
 * @copyright 2023
 */
export abstract class Yaml {

    /**
     * Cargar Yml mediante la url de la ruta del archivo
     * @param {string} url
     * @return any
     */
    static loadYml(url: string): any {
        try {
            return yaml.load(fs.readFileSync(url, 'utf8'));
        } catch (e) {
            console.log('Error al cargar el archivo yml:', e.message);
        }
    }

}