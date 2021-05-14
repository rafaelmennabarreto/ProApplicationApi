import CalculateEligibilityScoreUseCase from "@src/2-domain/useCases/CalculateEligibilityScoreUseCase";
import { Router } from "express";
import CalculateEligibilityScoreController from "./controllers/CalculateEligibilityScoreController";

const router = Router();

router.post("/eligibility/score/calculate", (req, res) =>
  new CalculateEligibilityScoreController(
    new CalculateEligibilityScoreUseCase()
  ).Handle(req, res)
);

export default router;
