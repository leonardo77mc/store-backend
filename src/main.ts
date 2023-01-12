import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from "@nestjs/common";

import * as compression from 'compression';
import * as bodyParser from 'body-parser';

import { AppModule } from './app.module';
import { Yaml } from "./class/yml.class";
import { ConfigService } from "./core/config/config.service";

const loadGlobal = function (config) {
  global.logYml = Yaml.loadYml(`./${config.get('LOGYAML')}`);
};

async function bootstrap() {

  const options = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "credentials": true
  }

  const app = await NestFactory.create(AppModule);
  app.use(compression());
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.enableCors(options);
  app.useGlobalPipes(new ValidationPipe());

  const config = app.get(ConfigService);
  const document = new DocumentBuilder()
      .setTitle("Store documentación")
      .setDescription("Api for technical test with Store App")
      .setVersion("1.0")
      .addTag("Store App")
      .build();

  const swager = SwaggerModule.createDocument(app, document);
  SwaggerModule.setup('api-doc', app, swager);

  loadGlobal(config);

  await app.listen(config.get('PORT'), () => {
    console.log('Server run in port:', config.get('PORT'));
  });
}
bootstrap();
