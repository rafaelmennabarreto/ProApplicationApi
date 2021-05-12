import IProject from "interfaces/IProject";
import UnderAgeError from "useCases/common/errors/UnderAgeError";
import ICalculateEligibilityScoreDto from "./dtos/ICalculateEligibilityScoreDto";
import EducationLevel from "./vo/EducationLevel";
import InternetSpeed from "./vo/InternetSpeed";
import PastExperience from "./vo/PastExperience";
import WriteScore from "./vo/WriteScore";

export default class CalculateEligibilityScoreUseCase {
  private score = 0;

  constructor(
    private _CalculateEligibilityScoreDto: ICalculateEligibilityScoreDto,
    private _Projects: IProject[]
  ) {}

  Execute() {
    if (this._CalculateEligibilityScoreDto.age < 18) throw new UnderAgeError();

    this.AddEducationLevelScore();
    this.AddExperienceScore();
    this.AddInternetScore();
    this.AddWritingScore();
    this.AddReferralCode();

    return this.GetElegibleProjects();
  }

  private GetElegibleProjects() {
    const selectedProject = this._Projects.filter((p) =>
      this.IsElegibleProject(p)
    )[0];

    const elegibleProjects = this._Projects.filter((p) =>
      this.IsElegibleProject(p)
    );

    const ineligibleProjects = this._Projects.filter(
      (p) => !this.IsElegibleProject(p)
    );

    return {
      score: this.score,
      selected_project: selectedProject,
      eligible_projects: elegibleProjects,
      ineligible_projects: ineligibleProjects,
    };
  }

  private AddEducationLevelScore() {
    const educationLevel = this._CalculateEligibilityScoreDto.education_level;
    this.score += new EducationLevel(educationLevel).score;
  }

  private AddExperienceScore() {
    const {
      sales,
      support,
    } = this._CalculateEligibilityScoreDto.past_experiences;

    this.score += new PastExperience(sales, support).score;
  }

  private AddInternetScore() {
    const {
      download_speed,
      upload_speed,
    } = this._CalculateEligibilityScoreDto.internet_test;

    this.score += new InternetSpeed(download_speed, upload_speed).score;
  }

  private AddWritingScore() {
    const { writing_score } = this._CalculateEligibilityScoreDto;

    this.score += new WriteScore(writing_score).score;
  }

  private AddReferralCode() {
    const { referral_code } = this._CalculateEligibilityScoreDto;

    if (referral_code === "token1234") this.score += 1;
  }

  private IsElegibleProject(project: IProject) {
    return this.score > project.elegibleScore;
  }
}
