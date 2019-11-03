"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoreActionTypes;
(function (CoreActionTypes) {
    CoreActionTypes["ErrorEncountered"] = "[GlobalErrorMessage] ErrorEncountered";
})(CoreActionTypes = exports.CoreActionTypes || (exports.CoreActionTypes = {}));
;
var ErrorEncountered = /** @class */ (function () {
    function ErrorEncountered(payload) {
        this.payload = payload;
        this.type = CoreActionTypes.ErrorEncountered;
    }
    return ErrorEncountered;
}());
exports.ErrorEncountered = ErrorEncountered;
;
//# sourceMappingURL=core.actions.js.map