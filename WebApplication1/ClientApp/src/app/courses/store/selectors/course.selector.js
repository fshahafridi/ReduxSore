"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
var courseSelectors = require("../reducers/courses.reducer");
var selectCourseFeatureState = store_1.createFeatureSelector('courses');
//export const isCourseAvailable = createSelector(
//    getCourseFeatureState,
//    state => state.isCourseAvailable
//);
//export const getCourse = createSelector(
//    getCourseFeatureState,
//    state => state.selectedCourse
//);
//export const getAllCourse = createSelector(
//    getCourseFeatureState,
//    state => state.
//);
exports.selectAllCourses = store_1.createSelector(selectCourseFeatureState, courseSelectors.loadAllCourses);
//# sourceMappingURL=course.selector.js.map