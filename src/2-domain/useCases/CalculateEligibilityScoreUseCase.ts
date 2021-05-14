import { ProjectsMock } from "@src/4-mocks/Projects";
import CalculateEligibilityScoreDto from "../dtos/CalculateEligibilityScoreDto";
import UnderAgeError from "../errors/UnderAgeError";
import IProject from "../interfaces/IProject";
import EducationLevel from "../vo/EducationLevel";
import InternetSpeed from "../vo/InternetSpeed";
import PastExperience from "../vo/PastExperience";
import WritingScore from "../vo/WritingScore";

export default class CalculateEligibilityScoreUseCase {
  constructor() {}

  Execute(calculateEligibilityScoreDto: CalculateEligibilityScoreDto) {
    if (calculateEligibilityScoreDto.age < 18) throw new UnderAgeError();

    const proScore =
      this.AddEducationLevelScore(calculateEligibilityScoreDto) +
      this.AddExperienceScore(calculateEligibilityScoreDto) +
      this.AddInternetScore(calculateEligibilityScoreDto) +
      this.AddWritingScore(calculateEligibilityScoreDto) +
      this.AddReferralCodeScore(calculateEligibilityScoreDto);

    return this.GetElegibleProjects(ProjectsMock, proScore);
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
    calculateEligibilityScoreDto: CalculateEligibilityScoreDto
  ) {
    const { education_level } = calculateEligibilityScoreDto;

    return new EducationLevel(education_level).score;
  }

  private AddExperienceScore(
    calculateEligibilityScoreDto: CalculateEligibilityScoreDto
  ) {
    const { sales, support } = calculateEligibilityScoreDto.past_experiences;

    return new PastExperience(sales, support).score;
  }

  private AddInternetScore(
    calculateEligibilityScoreDto: CalculateEligibilityScoreDto
  ) {
    const {
      download_speed,
      upload_speed,
    } = calculateEligibilityScoreDto.internet_test;

    return new InternetSpeed(download_speed, upload_speed).score;
  }

  private AddWritingScore(
    calculateEligibilityScoreDto: CalculateEligibilityScoreDto
  ) {
    const { writing_score } = calculateEligibilityScoreDto;

    return new WritingScore(writing_score).score;
  }

  private AddReferralCodeScore(
    calculateEligibilityScoreDto: CalculateEligibilityScoreDto
  ) {
    const { referral_code } = calculateEligibilityScoreDto;

    if (referral_code === "token1234") return 1;

    return 0;
  }

  private IsElegibleProject(project: IProject, proScore: number) {
    return proScore > project.elegibleScore;
  }
}
