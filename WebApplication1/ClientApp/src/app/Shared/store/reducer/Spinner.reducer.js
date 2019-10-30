"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_actions_1 = require("../actions/app.actions");
var initialState = { visible: false };
function SpinnerReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case app_actions_1.AppActionTypes.ShowSpinner:
            return __assign(__assign({}, state), { visible: true });
        case app_actions_1.AppActionTypes.HideSpinner:
            return __assign(__assign({}, state), { visible: false });
        default:
            return state;
    }
}
exports.SpinnerReducer = SpinnerReducer;
//# sourceMappingURL=Spinner.reducer.js.map