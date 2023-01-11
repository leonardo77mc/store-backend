import * as fs from 'fs';
import * as yaml from 'js-yaml';

export abstract class Yaml {

    static loadYml(url) {
        try {
            return yaml.load(fs.readFileSync(url, 'utf8'));
        } catch (e) {
            console.log('Error al cargar el archivo yml:', e.message);
        }
    }

}