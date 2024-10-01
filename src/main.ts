import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { auth } from 'express-openid-connect';
import { ValidationPipe } from '@nestjs/common';


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3080',
  clientID: 'hVljnVXeUPC4suqRiSkwLA8KqCehJ6g9',
  issuerBaseURL: 'https://dev-zte36wous88mo6mg.us.auth0.com',
  routes: {
    login: 'api/v1/auth/login',
  },
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    credentials: true,
  });



  app.setGlobalPrefix('/api/v1');
  app.useGlobalPipes(new ValidationPipe());


  app.use(auth(config));

  await app.listen(3080);

}
bootstrap();
