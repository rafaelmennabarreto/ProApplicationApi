import CalculateEligibilityScoreDto from "@src/2-domain/dtos/CalculateEligibilityScoreDto";
import CalculateEligibilityScoreUseCase from "@src/2-domain/useCases/CalculateEligibilityScoreUseCase";
import CalculateEligibilityScoreDtoValidator from "@src/2-domain/validators/CalculateEligibilityScoreDtoValidator";
import { Request, Response } from "express";

export default class CalculateEligibilityScoreController {
  constructor(
    private _calculateEligibilityUseCase: CalculateEligibilityScoreUseCase
  ) {}

  Handle(request: Request, response: Response) {
    try {
      const data: CalculateEligibilityScoreDto = request.body;

      new CalculateEligibilityScoreDtoValidator(data).validate();

      const responseData = this._calculateEligibilityUseCase.Execute(data);

      response.status(200).send(responseData);
    } catch (e) {
      response.status(400).send(e.message);
    }
  }
}
