import CarbonProjectBase from './CarbonProjectBase';

class RenewableEnergyProject extends CarbonProjectBase {
  calculateCarbonCredits(): number {
    return this.investmentAmount * 0.03;
  }

  calculateROI(): number {
    const carbonCreditsGenerated = this.calculateCarbonCredits();
    return ((carbonCreditsGenerated * 1.2) / this.investmentAmount) * 100;
  }
}

export default RenewableEnergyProject;
