import ICalculateEligibilityScoreDto from "../dtos/ICalculateEligibilityScoreDto";

export default class CalculateEligibilityScoreDtoValidator {
  private errorMessages = new Array<string>();

  constructor(
    private calculateEligibilityScoreDto: ICalculateEligibilityScoreDto
  ) {}

  validate() {
    this.validateAge();
    this.validateWritingScore();
    this.validateEducationLevel();
    this.validatePastExperiences();
    this.validateInternetTest();

    console.log(this.calculateEligibilityScoreDto);

    if (this.errorMessages.length > 0) {
      const message =
        "please enter a valid information for the field(s) " +
        this.errorMessages.reduce((prev, current) => prev + ", " + current);

      throw new Error(message);
    }
  }

  private validateAge() {
    const { age } = this.calculateEligibilityScoreDto;

    if (age == null || age < 0) this.errorMessages.push("age");
  }

  private validateEducationLevel() {
    const { education_level } = this.calculateEligibilityScoreDto;

    if (education_level == null) this.errorMessages.push("education level");
  }

  private validatePastExperiences() {
    const { past_experiences } = this.calculateEligibilityScoreDto;

    if (past_experiences == null) this.errorMessages.push("past experience");
  }

  private validateInternetTest() {
    const { internet_test } = this.calculateEligibilityScoreDto;

    if (internet_test == null) this.errorMessages.push("internet test");
  }

  private validateWritingScore() {
    const { writing_score } = this.calculateEligibilityScoreDto;

    if (writing_score == null || writing_score < 0 || writing_score > 1)
      this.errorMessages.push("writing score");
  }
}
