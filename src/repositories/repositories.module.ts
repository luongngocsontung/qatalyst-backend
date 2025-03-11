import { Global, Module } from '@nestjs/common';
import { CarbonProjectRepository } from './carbon-project.repository';

@Global()
@Module({
  providers: [CarbonProjectRepository],
  exports: [CarbonProjectRepository],
})
export class RepositoriesModule {}
