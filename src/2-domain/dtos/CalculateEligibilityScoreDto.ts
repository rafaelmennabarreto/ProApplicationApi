import InternetTestDto from "./InternetTestDto";
import PastExperienceDto from "./PastExperienceDto";

export default class CalculateEligibilityScoreDto {
  age!: number;
  education_level!: string;
  past_experiences!: PastExperienceDto;
  internet_test!: InternetTestDto;
  writing_score!: number;
  referral_code!: string;
}
