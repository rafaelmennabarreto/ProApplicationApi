"use strict";
exports.__esModule = true;
var CalculateEligibilityScoreUseCase_1 = require("@src/2-domain/useCases/CalculateEligibilityScoreUseCase");
var express_1 = require("express");
var CalculateEligibilityScoreController_1 = require("./controllers/CalculateEligibilityScoreController");
var router = express_1.Router();
router.post("/eligibility/score/calculate", function (req, res) {
    return new CalculateEligibilityScoreController_1["default"](new CalculateEligibilityScoreUseCase_1["default"]()).Handle(req, res);
});
exports["default"] = router;
