import {courseModel } from '../../models/courses.model'
import { Action } from '@ngrx/store'

export enum CoursesActionTypes {
    LoadAllCourses = '[Course Component] LoadCourses',
    LoadAllCoursesSuccess = '[Course Component] LoadCoursesSuccess',
    AddCourse = '[Course Component] Add Course',
    AddCourseSuccess = '[Course Component] Add Course Success',
    AddCourseFailed = '[Course Component] Add Course Failed',
    DeleteCourse = '[Course Component] Delete',
    ShowCourses = '[Course Component] toggle',
    SetCurrentCourse = '[Course Component] Set Current Course',
    UpdateCourse = '[Course Component] Update Course'
}


//////////////////Load course////////////////////
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
//////////////////Add Course///////////////
export class AddCourse implements Action {
    readonly type = CoursesActionTypes.AddCourse;
    constructor(public payload: courseModel) {
    }
}

export class AddCourseSuccess implements Action {
    readonly type = CoursesActionTypes.AddCourseSuccess;
    constructor(public payload: courseModel) {
    }
}
export class AddCourseFailed implements Action {
    readonly type = CoursesActionTypes.AddCourseFailed;
    constructor(public errorPayload: string) {
    }
}

/////////////////////////////////////////
export class SetCurrentCourse implements Action {
    readonly type = CoursesActionTypes.SetCurrentCourse;
    constructor(public payload: any) {
    }
}
export class UpdateCourse implements Action {
    readonly type = CoursesActionTypes.UpdateCourse;
    constructor(public payload: any) {
    }
}

export class ShowCourses implements Action {
    readonly type = CoursesActionTypes.ShowCourses;
    constructor(public payload: boolean) {
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
    AddCourseSuccess |
    AddCourseFailed|
    DeleteCourse;
 

