import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CourseListingState } from "../state/courses.state";
import * as courseSelectors from '../reducers/courses.reducer'
import { CourseModuleState } from "..";


//The main store node is CourseModuleState(on the courses feature module). we neeed to select courses node.
export const getReferencesState = createFeatureSelector<CourseModuleState>('courses');
//select the course node from the store..
export const getCourseListingState = createSelector(getReferencesState, state => state.courses);


export const selectAllCourses = createSelector(
    getCourseListingState,
    courseSelectors.loadAllCourses
);
export const isLoading = createSelector(
     getCourseListingState,
    (state: CourseListingState) => state.isloading
)





