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
var core_actions_1 = require("../actions/core.actions");
var initialState = { errorMessage: '' };
function ErrorReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case core_actions_1.CoreActionTypes.ErrorEncountered:
            return __assign(__assign({}, state), { errorMessage: action.payload });
        default:
            return state;
    }
}
exports.ErrorReducer = ErrorReducer;
//# sourceMappingURL=erro.reducer.js.map