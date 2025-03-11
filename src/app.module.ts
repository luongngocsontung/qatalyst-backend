import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarbonModule } from './carbon/carbon.module';
import { RepositoriesModule } from './repositories/repositories.module';

@Module({
  imports: [CarbonModule, RepositoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
