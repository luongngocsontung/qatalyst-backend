import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const configService = app.get(ConfigService);

  const frontendUrl = configService.get<string>('frontendUrl');
  app.enableCors({
    origin: frontendUrl,
  });

  const port = configService.get<number>('port');
  await app.listen(port || 3000);
}
bootstrap();
