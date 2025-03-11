import { Module } from '@nestjs/common';
import { CarbonService } from './carbon.service';
import { CarbonController } from './carbon.controller';

@Module({
  providers: [CarbonService],
  controllers: [CarbonController],
})
export class CarbonModule {}
