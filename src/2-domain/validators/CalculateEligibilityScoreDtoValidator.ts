import CalculateEligibilityScoreDto from "../dtos/CalculateEligibilityScoreDto";

export default class CalculateEligibilityScoreDtoValidator {
  private _errorMessages = new Array<string>();

  constructor(
    private calculateEligibilityScoreDto: CalculateEligibilityScoreDto
  ) {}

  validate() {
    this.validateAge();
    this.validateWritingScore();
    this.validateEducationLevel();
    this.validatePastExperiences();
    this.validateInternetTest();

    if (this._errorMessages.length > 0) {
      const message =
        "please enter a valid information for the field(s) " +
        this._errorMessages.reduce((prev, current) => prev + ", " + current);

      throw new Error(message);
    }
  }

  private validateAge() {
    const { age } = this.calculateEligibilityScoreDto;

    if (age == null || age < 0) this._errorMessages.push("age");
  }

  private validateEducationLevel() {
    const { education_level } = this.calculateEligibilityScoreDto;

    if (education_level == null) this._errorMessages.push("education level");
  }

  private validatePastExperiences() {
    const { past_experiences } = this.calculateEligibilityScoreDto;

    if (past_experiences == null) this._errorMessages.push("past experience");
  }

  private validateInternetTest() {
    const { internet_test } = this.calculateEligibilityScoreDto;

    if (internet_test == null) this._errorMessages.push("internet test");
  }

  private validateWritingScore() {
    const { writing_score } = this.calculateEligibilityScoreDto;

    if (writing_score == null || writing_score < 0 || writing_score > 1)
      this._errorMessages.push("writing score");
  }
}
