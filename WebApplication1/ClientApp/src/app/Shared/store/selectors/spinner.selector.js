"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
exports.getReferencesState = store_1.createFeatureSelector('sharedState');
//select the course node from the store..
exports.getSpinnerState = store_1.createSelector(exports.getReferencesState, function (state) { return state.spinnerState; });
exports.toggeSpinner = store_1.createSelector(exports.getSpinnerState, function (state) { return state.visible; });
//# sourceMappingURL=spinner.selector.js.map