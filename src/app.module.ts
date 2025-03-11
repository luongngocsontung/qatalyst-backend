import { Module } from '@nestjs/common';
import { CarbonModule } from './carbon/carbon.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule, CarbonModule, RepositoriesModule],
})
export class AppModule {}
