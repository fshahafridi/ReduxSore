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
var actions_1 = require("../actions/actions");
var entity_1 = require("@ngrx/entity");
exports.courseAdapter = entity_1.createEntityAdapter({
    // This property must be set to the Primary Key in The Collection. If the Collection contains the Primary Key with Name "id" then it is not required...
    //Otherwise map the Id from the collection to the selectId
    selectId: function (course) { return course.courseId; }
});
var initialState = exports.courseAdapter.getInitialState({
    selectedCourseId: null,
    isloading: false,
    error: ""
});
function CourseReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actions_1.CoursesActionTypes.LoadAllCoursesSuccess:
            return exports.courseAdapter.addAll(action.payload, __assign(__assign({}, state), { isloading: false }));
        case actions_1.CoursesActionTypes.LoadAllCourses:
            return __assign(__assign({}, state), { isloading: true });
        case actions_1.CoursesActionTypes.AddCourse:
            return __assign(__assign({}, state), { isloading: true });
        case actions_1.CoursesActionTypes.AddCourseSuccess:
            return exports.courseAdapter.addOne(action.payload, __assign(__assign({}, state), { isloading: false }));
        case actions_1.CoursesActionTypes.AddCourseFailed:
            return __assign(__assign({}, state), { isloading: false, error: action.errorPayload });
        case actions_1.CoursesActionTypes.DeleteCourse:
            return exports.courseAdapter.removeOne(action.payload, __assign(__assign({}, state), { isloading: true }));
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
//export const isLoading= (state: CourseListingState) => state.isloading;
//# sourceMappingURL=courses.reducer.js.map