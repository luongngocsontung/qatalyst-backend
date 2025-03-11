import CarbonProjectBase from './CarbonProjectBase';

class ReforestationProject extends CarbonProjectBase {
  calculateCarbonCredits(): number {
    return this.investmentAmount * 0.05;
  }

  calculateROI(): number {
    const carbonCreditsGenerated = this.calculateCarbonCredits();
    return ((carbonCreditsGenerated * 0.8) / this.investmentAmount) * 100;
  }
}

export default ReforestationProject;
