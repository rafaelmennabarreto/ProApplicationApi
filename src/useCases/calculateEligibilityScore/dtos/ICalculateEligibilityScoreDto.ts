import IInternetTestDto from "./IInternetTestDto";
import IPastExperienceDto from "./IPastExperienceDto";

export default interface ICalculateEligibilityScoreDto {
  age: number;
  education_level: string;
  past_experiences: IPastExperienceDto;
  internet_test: IInternetTestDto;
  writing_score: number;
  referral_code: string;
}
