"use strict";
exports.__esModule = true;
var CalculateEligibilityScoreDtoValidator_1 = require("@src/2-domain/validators/CalculateEligibilityScoreDtoValidator");
var CalculateEligibilityScoreController = /** @class */ (function () {
    function CalculateEligibilityScoreController(_calculateEligibilityUseCase) {
        this._calculateEligibilityUseCase = _calculateEligibilityUseCase;
    }
    CalculateEligibilityScoreController.prototype.Handle = function (request, response) {
        try {
            var data = request.body;
            new CalculateEligibilityScoreDtoValidator_1["default"](data).validate();
            var responseData = this._calculateEligibilityUseCase.Execute(data);
            response.status(200).send(responseData);
        }
        catch (e) {
            response.status(400).send(e.message);
        }
    };
    return CalculateEligibilityScoreController;
}());
exports["default"] = CalculateEligibilityScoreController;
