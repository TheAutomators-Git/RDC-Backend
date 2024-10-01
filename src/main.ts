// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   // Enable CORS
//   app.enableCors({
//     origin: 'http://localhost:3001',
//     methods: 'GET,POST',
//   });

//   await app.listen(3001);  // Make sure backend is running on port 3001
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response } from 'express';

import { auth } from 'express-openid-connect';
import { ValidationPipe } from '@nestjs/common';
import dotenv from 'dotenv';
// dotenv.config();

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: process.env.AUTH0_SECRET,
//   baseURL: process.env.BASE_URL || 'http://localhost:3080',
//   clientID: process.env.AUTH0_CLIENT_ID,
//   issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
// };

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   secret: 'a long, randomly-generated string stored in env',
//   baseURL: 'http://localhost:3080',
//   clientID: 'OmWq1ZqQh3pTGAFy11xjemwjaowYGGJb',
//   issuerBaseURL: 'https://dev-2va2uk7zqrz6xxbl.us.auth0.com',
// };

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3080',
  clientID: 'hVljnVXeUPC4suqRiSkwLA8KqCehJ6g9',
  issuerBaseURL: 'https://dev-zte36wous88mo6mg.us.auth0.com'
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
