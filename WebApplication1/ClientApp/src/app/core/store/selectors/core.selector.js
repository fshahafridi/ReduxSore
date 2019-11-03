"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
exports.getReferencesState = store_1.createFeatureSelector('coreState');
//select the course node from the store..
exports.getErrorState = store_1.createSelector(exports.getReferencesState, function (state) { return state.errorState; });
exports.getErrorMessage = store_1.createSelector(exports.getErrorState, function (state) { return state.errorMessage; });
//# sourceMappingURL=core.selector.js.map