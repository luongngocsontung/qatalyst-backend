abstract class CarbonProjectBase {
  projectName: string;
  location: string;
  investmentAmount: number;

  constructor(projectName: string, location: string, investmentAmount: number) {
    this.projectName = projectName;
    this.location = location;
    this.investmentAmount = investmentAmount;
  }

  abstract calculateCarbonCredits(): number;
  abstract calculateROI(): number;
}

export default CarbonProjectBase;
