"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("../actions/actions");
var entity_1 = require("@ngrx/entity");
exports.courseAdapter = entity_1.createEntityAdapter();
var initialState = exports.courseAdapter.getInitialState();
function CourseReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actions_1.CoursesActionTypes.LoadAllCoursesSuccess:
            return exports.courseAdapter.addAll(action.payload, state);
        //case CoursesActionTypes.SetCurrentCourse:
        //    return {
        //        ...state, selectedCourse: action.payload
        //    };
        //case CoursesActionTypes.ShowCourses:
        //    console.log("existing state:" + JSON.stringify(state));
        //    console.log("Payload" + action.payload);
        //    return { 
        //        ...state, isCourseAvailable: action.payload
        //    }; 
        //case CoursesActionTypes.AddCourse:
        //    return {
        //        ...state, allCoursers: action.payload
        //    };
        //case CoursesActionTypes.RemoveCourse:
        //    return {
        //        ...state, selectedCourse: action.payload
        //    };
        default:
            return state;
    }
}
exports.CourseReducer = CourseReducer;
////////////// ///////////Selectors////////////////////////
// get the selectors
var _a = exports.courseAdapter.getSelectors(), selectIds = _a.selectIds, selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;
exports.loadAllCourses = selectAll;
//# sourceMappingURL=courses.reducer.js.map