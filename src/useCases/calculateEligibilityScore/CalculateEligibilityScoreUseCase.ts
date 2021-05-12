import IProject from "@src/interfaces/IProject";
import { Projects } from "@src/mock/Projects";
import UnderAgeError from "../common/errors/UnderAgeError";
import ICalculateEligibilityScoreDto from "./dtos/ICalculateEligibilityScoreDto";
import EducationLevel from "./vo/EducationLevel";
import InternetSpeed from "./vo/InternetSpeed";
import PastExperience from "./vo/PastExperience";
import WriteScore from "./vo/WriteScore";

export default class CalculateEligibilityScoreUseCase {
  constructor() {}

  Execute(calculateEligibilityScoreDto: ICalculateEligibilityScoreDto) {
    if (calculateEligibilityScoreDto.age < 18) throw new UnderAgeError();

    const proScore =
      this.AddEducationLevelScore(calculateEligibilityScoreDto) +
      this.AddExperienceScore(calculateEligibilityScoreDto) +
      this.AddInternetScore(calculateEligibilityScoreDto) +
      this.AddWritingScore(calculateEligibilityScoreDto) +
      this.AddReferralCodeScore(calculateEligibilityScoreDto);

    return this.GetElegibleProjects(Projects, proScore);
  }

  private GetElegibleProjects(projects: IProject[], proScore: number) {
    const selectedProject = projects.filter((p) =>
      this.IsElegibleProject(p, proScore)
    )[0];

    const elegibleProjects = projects.filter((p) =>
      this.IsElegibleProject(p, proScore)
    );

    const ineligibleProjects = projects.filter(
      (p) => !this.IsElegibleProject(p, proScore)
    );

    return {
      score: proScore,
      selected_project: selectedProject,
      eligible_projects: elegibleProjects,
      ineligible_projects: ineligibleProjects,
    };
  }

  private AddEducationLevelScore(
    calculateEligibilityScoreDto: ICalculateEligibilityScoreDto
  ) {
    const { education_level } = calculateEligibilityScoreDto;

    return new EducationLevel(education_level).score;
  }

  private AddExperienceScore(
    calculateEligibilityScoreDto: ICalculateEligibilityScoreDto
  ) {
    const { sales, support } = calculateEligibilityScoreDto.past_experiences;

    return new PastExperience(sales, support).score;
  }

  private AddInternetScore(
    calculateEligibilityScoreDto: ICalculateEligibilityScoreDto
  ) {
    const {
      download_speed,
      upload_speed,
    } = calculateEligibilityScoreDto.internet_test;

    return new InternetSpeed(download_speed, upload_speed).score;
  }

  private AddWritingScore(
    calculateEligibilityScoreDto: ICalculateEligibilityScoreDto
  ) {
    const { writing_score } = calculateEligibilityScoreDto;

    return new WriteScore(writing_score).score;
  }

  private AddReferralCodeScore(
    calculateEligibilityScoreDto: ICalculateEligibilityScoreDto
  ) {
    const { referral_code } = calculateEligibilityScoreDto;

    if (referral_code === "token1234") return 1;

    return 0;
  }

  private IsElegibleProject(project: IProject, proScore: number) {
    return proScore > project.elegibleScore;
  }
}
