import CalculateEligibilityScoreController from "./CalculateEligibilityScoreController";
import CalculateEligibilityScoreUseCase from "./CalculateEligibilityScoreUseCase";

const calculateEligiblityUseCase = new CalculateEligibilityScoreUseCase();

const calculateEligibilityController = new CalculateEligibilityScoreController(
  calculateEligiblityUseCase
);

export { calculateEligibilityController };
