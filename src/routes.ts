import { Router } from "express";
import { calculateEligibilityController } from "./useCases/calculateEligibilityScore";

const router = Router();

router.post("/eligibility/score/calculate", (req, res) =>
  calculateEligibilityController.Handle(req, res)
);

export default router;
