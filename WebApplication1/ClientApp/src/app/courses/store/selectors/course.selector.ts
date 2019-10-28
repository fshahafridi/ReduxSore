import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CourseState } from "../state/courses.state";
import * as courseSelectors from '../reducers/courses.reducer'

const selectCourseFeatureState = createFeatureSelector<CourseState>('courses');

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

export const selectAllCourses = createSelector(
    selectCourseFeatureState,
    courseSelectors.loadAllCourses
);




