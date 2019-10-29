"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_actions_1 = require("../actions/app.actions");
var entity_1 = require("@ngrx/entity");
exports.appAdapter = entity_1.createEntityAdapter({
    // This property must be set to the Primary Key in The Collection. If the Collection contains the Primary Key with Name "id" then it is not required...
    //Otherwise map the Id from the collection to the selectId
    selectId: function (headerModel) { return headerModel.id; }
});
var initialState = exports.appAdapter.getInitialState();
function AppReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case app_actions_1.SharedActionTypes.ChangeUserName:
            return exports.appAdapter.addOne(action.payload, state);
        default:
            return state;
    }
}
exports.AppReducer = AppReducer;
////////////// ///////////Selectors////////////////////////
// get the selectors
var _a = exports.appAdapter.getSelectors(), selectIds = _a.selectIds, selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;
exports.loadAppState = selectAll;
//# sourceMappingURL=app.reducer.js.map