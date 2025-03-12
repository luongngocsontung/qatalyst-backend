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
  async saveProject(
    @Body() carbonProjectDto: CarbonProjectRequestDto,
  ): Promise<{ message: string }> {
    await this.carbonService.saveProject(carbonProjectDto);
    return { message: 'Project saved successfully!' };
  }

  @Get('projects')
  getAllProjects(): Promise<CarbonProject[]> {
    return this.carbonService.getAllProjects();
  }
}
