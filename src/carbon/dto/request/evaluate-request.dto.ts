import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CarbonProject } from 'src/types/carbon-project';

export class EvaluateRequestDto {
  @IsNotEmpty()
  @IsEnum(CarbonProject)
  projectType: CarbonProject;

  @IsNotEmpty()
  @IsString()
  projectName: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsNumber()
  investmentAmount: number;
}
