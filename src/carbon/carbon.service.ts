import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EvaluateRequestDto } from './dto/request/evaluate-request.dto';
import { CarbonProjectType } from 'src/types/carbon-project';
import ReforestationProject from './entities/ReforestationProject';
import RenewableEnergyProject from './entities/RenewableEnergyProject';
import { EvaluateResponseDto } from './dto/response/evaluate-response.dto';
import { CarbonProject } from 'src/models/carbon-project.model';
import { CarbonProjectRequestDto } from './dto/request/carbon-project-request.dto';
import { CarbonProjectRepository } from 'src/repositories/carbon-project.repository';

@Injectable()
export class CarbonService {
  constructor(private readonly carbonProjectRepo: CarbonProjectRepository) {}

  getCarbonProject(
    evaluateDto: EvaluateRequestDto,
  ): ReforestationProject | RenewableEnergyProject {
    const { projectType, projectName, location, investmentAmount } =
      evaluateDto;

    let project: ReforestationProject | RenewableEnergyProject;

    switch (projectType) {
      case CarbonProjectType.REFORESTATION:
        project = new ReforestationProject(
          projectName,
          location,
          investmentAmount,
        );
        break;
      case CarbonProjectType.RENEWABLE_ENERGY:
        project = new RenewableEnergyProject(
          projectName,
          location,
          investmentAmount,
        );
        break;
      default:
        throw new HttpException(
          'project type is invalid!',
          HttpStatus.BAD_REQUEST,
        );
    }

    return project;
  }

  evaluate(evaluateDto: EvaluateRequestDto): EvaluateResponseDto {
    const project = this.getCarbonProject(evaluateDto);

    const carbonCreditsGenerated = project.calculateCarbonCredits();
    const estimatedROI = project.calculateROI();

    return {
      projectName: project.projectName,
      carbonCreditsGenerated,
      estimatedROI,
    };
  }

  async saveProject(
    carbonProjectDto: CarbonProjectRequestDto,
  ): Promise<CarbonProject> {
    const project = await this.carbonProjectRepo.create(carbonProjectDto);
    return project;
  }

  async getAllProjects(): Promise<CarbonProject[]> {
    return this.carbonProjectRepo.findAll();
  }
}
