import { Injectable } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as CoursesAction from '../actions/actions';
import { mergeMap, map, delay, switchMap, catchError } from 'rxjs/operators';
import { courseModel} from '../../models/courses.model'
import { of } from 'rxjs';


@Injectable()
export class CourseEffects {

    constructor(private courseService: CourseService, private actions$: Actions) {
    }
    @Effect()
    loadCourses$ = this.actions$.pipe(
        ofType(CoursesAction.CoursesActionTypes.LoadAllCourses),
        mergeMap((action: CoursesAction.LoadAllCourses) =>
            this.courseService.getAllCourses().pipe(
            map((courses: courseModel[]) => (
                new CoursesAction.LoadAllCoursesSuccess(courses)))
                , delay(4000)))
    )

    //@Effect()
    //addCourse$ = this.actions$.pipe(
    //    ofType(CoursesAction.CoursesActionTypes.AddCourse),
    //    mergeMap((action: CoursesAction.AddCourse) =>
    //        this.courseService.getAllCourses().pipe(
    //            map((courses: courseModel[]) => (
    //                new CoursesAction.AddCourseSuccess(null)))
    //        ))

    //    )

    @Effect()
    addCourse$ = this.actions$.pipe(
        ofType(CoursesAction.CoursesActionTypes.AddCourse),
        mergeMap((action: CoursesAction.AddCourse) =>
            this.courseService.addCourse(action.payload).pipe(
                map((courses: courseModel) => (new CoursesAction.AddCourseSuccess(courses)))//map
                ,catchError(error => of(new CoursesAction.AddCourseFailed(error)))
                 )//pipe
             
            
        )

    )

   
}
