import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

console.log(123);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();
