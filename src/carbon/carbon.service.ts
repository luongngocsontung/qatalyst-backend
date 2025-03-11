import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EvaluateRequestDto } from './dto/request/evaluate-request.dto';
import { CarbonProject } from 'src/types/carbon-project';
import ReforestationProject from './entities/ReforestationProject';
import RenewableEnergyProject from './entities/RenewableEnergyProject';
import { EvaluateResponseDto } from './dto/response/evaluate-response.dto';

@Injectable()
export class CarbonService {
  getCarbonProject(
    evaluateDto: EvaluateRequestDto,
  ): ReforestationProject | RenewableEnergyProject {
    const { projectType, projectName, location, investmentAmount } =
      evaluateDto;

    let project: ReforestationProject | RenewableEnergyProject;

    switch (projectType) {
      case CarbonProject.REFORESTATION:
        project = new ReforestationProject(
          projectName,
          location,
          investmentAmount,
        );
        break;
      case CarbonProject.RENEWABLE_ENERGY:
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
}
