import {courseModel } from '../../models/courses.model'
import { Action } from '@ngrx/store'

export enum CoursesActionTypes {
    LoadAllCourses = '[Course Component] LoadCourses',
    LoadAllCoursesSuccess = '[Course Component] LoadCoursesSuccess',
    AddCourse = '[Course Component] Add Course',
    DeleteCourse = '[Course Component] Delete',
    ShowCourses = '[Course Component] toggle',
    SetCurrentCourse = '[Course Component] Set Current Course',
    UpdateCourse = '[Course Component] Update Course'
}

export class SetCurrentCourse implements Action {
    readonly type = CoursesActionTypes.SetCurrentCourse;
    constructor(public payload:any) {
    }
}
export class UpdateCourse implements Action {
    readonly type = CoursesActionTypes.UpdateCourse;
    constructor(public payload: any) {
    }
}
export class LoadAllCourses implements Action {
    readonly type = CoursesActionTypes.LoadAllCourses;
    constructor() {
    }
}
export class LoadAllCoursesSuccess implements Action {
    readonly type = CoursesActionTypes.LoadAllCoursesSuccess;
    constructor(public payload: courseModel[]) {
    }
}
export class ShowCourses implements Action {
    readonly type = CoursesActionTypes.ShowCourses;
    constructor(public payload: boolean) {
    }
}
  
export class AddCourse implements Action {
    readonly type = CoursesActionTypes.AddCourse;
    constructor(public payload: courseModel) {
    }
}
export class DeleteCourse implements Action {
    readonly type = CoursesActionTypes.DeleteCourse;
    constructor(public payload: number) {
    }
}

export type CourseAction =

    UpdateCourse |
    SetCurrentCourse |
    LoadAllCoursesSuccess |
    LoadAllCourses |
    ShowCourses |
    AddCourse |
    DeleteCourse;
 

