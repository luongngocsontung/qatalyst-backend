import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CarbonProjectType } from 'src/types/carbon-project';

export class EvaluateRequestDto {
  @IsNotEmpty()
  @IsEnum(CarbonProjectType)
  projectType: CarbonProjectType;

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
