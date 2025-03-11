import { Body, Controller, Post } from '@nestjs/common';
import { EvaluateRequestDto } from './dto/request/evaluate-request.dto';
import { CarbonService } from './carbon.service';
import { EvaluateResponseDto } from './dto/response/evaluate-response.dto';

@Controller()
export class CarbonController {
  constructor(private readonly carbonService: CarbonService) {}

  @Post('evaluate')
  evaluateProject(
    @Body() evaluateDto: EvaluateRequestDto,
  ): EvaluateResponseDto {
    return this.carbonService.evaluate(evaluateDto);
  }
}
