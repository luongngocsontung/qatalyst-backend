import { Body, Controller, Get, Post } from '@nestjs/common';
import { EvaluateRequestDto } from './dto/request/evaluate-request.dto';
import { CarbonService } from './carbon.service';
import { EvaluateResponseDto } from './dto/response/evaluate-response.dto';
import { CarbonProjectRequestDto } from './dto/request/carbon-project-request.dto';
import { CarbonProject } from 'src/models/carbon-project.model';

@Controller()
export class CarbonController {
  constructor(private readonly carbonService: CarbonService) {}

  @Post('evaluate')
  evaluateProject(
    @Body() evaluateDto: EvaluateRequestDto,
  ): EvaluateResponseDto {
    return this.carbonService.evaluate(evaluateDto);
  }

  @Post('projects')
  saveProject(
    @Body() carbonProjectDto: CarbonProjectRequestDto,
  ): Promise<CarbonProject> {
    return this.carbonService.saveProject(carbonProjectDto);
  }

  @Get('projects')
  getAllProjects(): Promise<CarbonProject[]> {
    return this.carbonService.getAllProjects();
  }
}
