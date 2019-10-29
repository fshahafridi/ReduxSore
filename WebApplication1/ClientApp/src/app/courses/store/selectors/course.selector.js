"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
var courseSelectors = require("../reducers/courses.reducer");
//The main store node is CourseModuleState(on the courses feature module). we neeed to select courses node.
exports.getReferencesState = store_1.createFeatureSelector('courses');
//select the course node from the store..
exports.getCourseListingState = store_1.createSelector(exports.getReferencesState, function (state) { return state.courses; });
exports.selectAllCourses = store_1.createSelector(exports.getCourseListingState, courseSelectors.loadAllCourses);
//# sourceMappingURL=course.selector.js.map