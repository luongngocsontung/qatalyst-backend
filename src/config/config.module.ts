import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import config from './config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      validate: (config) => {
        if (!config.FRONTEND_URL) {
          throw new Error('FRONTEND_URL is not set');
        }
        return config;
      },
    }),
  ],
})
export class ConfigModule {}
