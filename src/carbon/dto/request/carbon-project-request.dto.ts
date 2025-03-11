import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CarbonProjectRequestDto {
  @IsNotEmpty()
  @IsString()
  projectName: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsNumber()
  investmentAmount: number;

  @IsNotEmpty()
  @IsNumber()
  carbonCreditsGenerated: number;

  @IsNotEmpty()
  @IsNumber()
  estimatedROI: number;
}
