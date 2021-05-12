import { Request, Response } from "express";
import CalculateEligibilityScoreUseCase from "./CalculateEligibilityScoreUseCase";
import ICalculateEligibilityScoreDto from "./dtos/ICalculateEligibilityScoreDto";
import CalculateEligibilityScoreDtoValidator from "./validators/CalculateEligibilityScoreDtoValidator";

export default class CalculateEligibilityScoreController {
  constructor(
    private _calculateEligibilityUseCase: CalculateEligibilityScoreUseCase
  ) {}

  Handle(request: Request, response: Response) {
    try {
      const data: ICalculateEligibilityScoreDto = request.body;

      new CalculateEligibilityScoreDtoValidator(data).validate();

      const responseData = this._calculateEligibilityUseCase.Execute(data);

      response.status(200).send(responseData);
    } catch (e) {
      response.status(400).send(e.message);
    }
  }
}
