"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppActionTypes;
(function (AppActionTypes) {
    AppActionTypes["ChangeUserName"] = "[Header Component] ChangeUserName";
    AppActionTypes["ShowSpinner"] = "[Spinner Component] ShowSpinner";
    AppActionTypes["HideSpinner"] = "[Hide Component] HideSpinner";
})(AppActionTypes = exports.AppActionTypes || (exports.AppActionTypes = {}));
;
var ChangeUserName = /** @class */ (function () {
    function ChangeUserName(payload) {
        this.payload = payload;
        this.type = AppActionTypes.ChangeUserName;
    }
    return ChangeUserName;
}());
exports.ChangeUserName = ChangeUserName;
;
var ShowSpinner = /** @class */ (function () {
    function ShowSpinner(payload) {
        this.payload = payload;
        this.type = AppActionTypes.ShowSpinner;
    }
    return ShowSpinner;
}());
exports.ShowSpinner = ShowSpinner;
;
var HideSpinner = /** @class */ (function () {
    function HideSpinner(payload) {
        this.payload = payload;
        this.type = AppActionTypes.HideSpinner;
    }
    return HideSpinner;
}());
exports.HideSpinner = HideSpinner;
;
//# sourceMappingURL=app.actions.js.map