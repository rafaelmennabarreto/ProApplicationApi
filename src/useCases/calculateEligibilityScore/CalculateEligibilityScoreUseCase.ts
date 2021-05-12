import IProject from "@src/interfaces/IProject";
import { Projects } from "@src/mock/Projects";
import UnderAgeError from "../common/errors/UnderAgeError";
import ICalculateEligibilityScoreDto from "./dtos/ICalculateEligibilityScoreDto";
import EducationLevel from "./vo/EducationLevel";
import InternetSpeed from "./vo/InternetSpeed";
import PastExperience from "./vo/PastExperience";
import WriteScore from "./vo/WriteScore";

export default class CalculateEligibilityScoreUseCase {
  private score = 0;

  constructor() {}

  Execute(calculateEligibilityScoreDto: ICalculateEligibilityScoreDto) {
    if (calculateEligibilityScoreDto.age < 18) throw new UnderAgeError();

    this.AddEducationLevelScore(calculateEligibilityScoreDto);
    this.AddExperienceScore(calculateEligibilityScoreDto);
    this.AddInternetScore(calculateEligibilityScoreDto);
    this.AddWritingScore(calculateEligibilityScoreDto);
    this.AddReferralCode(calculateEligibilityScoreDto);

    return this.GetElegibleProjects(Projects);
  }

  private GetElegibleProjects(projects: IProject[]) {
    const selectedProject = projects.filter((p) =>
      this.IsElegibleProject(p)
    )[0];

    const elegibleProjects = projects.filter((p) => this.IsElegibleProject(p));

    const ineligibleProjects = projects.filter(
      (p) => !this.IsElegibleProject(p)
    );

    return {
      score: this.score,
      selected_project: selectedProject,
      eligible_projects: elegibleProjects,
      ineligible_projects: ineligibleProjects,
    };
  }

  private AddEducationLevelScore(
    calculateEligibilityScoreDto: ICalculateEligibilityScoreDto
  ) {
    const { education_level } = calculateEligibilityScoreDto;

    this.score += new EducationLevel(education_level).score;
  }

  private AddExperienceScore(
    calculateEligibilityScoreDto: ICalculateEligibilityScoreDto
  ) {
    const { sales, support } = calculateEligibilityScoreDto.past_experiences;

    this.score += new PastExperience(sales, support).score;
  }

  private AddInternetScore(
    calculateEligibilityScoreDto: ICalculateEligibilityScoreDto
  ) {
    const {
      download_speed,
      upload_speed,
    } = calculateEligibilityScoreDto.internet_test;

    this.score += new InternetSpeed(download_speed, upload_speed).score;
  }

  private AddWritingScore(
    calculateEligibilityScoreDto: ICalculateEligibilityScoreDto
  ) {
    const { writing_score } = calculateEligibilityScoreDto;

    this.score += new WriteScore(writing_score).score;
  }

  private AddReferralCode(
    calculateEligibilityScoreDto: ICalculateEligibilityScoreDto
  ) {
    const { referral_code } = calculateEligibilityScoreDto;

    if (referral_code === "token1234") this.score += 1;
  }

  private IsElegibleProject(project: IProject) {
    return this.score > project.elegibleScore;
  }
}
