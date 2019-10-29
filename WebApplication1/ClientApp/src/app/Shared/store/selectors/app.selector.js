"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
var AppSelectors = require("../reducer/app.reducer");
var selectAppFeatureState = store_1.createFeatureSelector('appState');
exports.loadUserName = store_1.createSelector(selectAppFeatureState, AppSelectors.loadAppState);
//# sourceMappingURL=app.selector.js.map