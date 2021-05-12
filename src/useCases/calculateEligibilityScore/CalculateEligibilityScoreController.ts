import { Request, Response } from "express";
import ICalculateEligibilityScoreDto from "./dtos/ICalculateEligibilityScoreDto";
import CalculateEligibilityScoreDtoValidator from "./validators/CalculateEligibilityScoreDtoValidator";

export default class CalculateEligibilityScoreController {
  Handle(request: Request, response: Response) {
    // create a instance from use case here
    try {
      const data: ICalculateEligibilityScoreDto = request.body;

      new CalculateEligibilityScoreDtoValidator(data).validate();

      response.send("tudo certo");
    } catch (e) {
      response.status(400).send(e.message);
    }
  }
}
