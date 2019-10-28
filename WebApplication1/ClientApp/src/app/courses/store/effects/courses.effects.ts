import { Injectable } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as CoursesAction from '../actions/actions';
import { mergeMap, map } from 'rxjs/operators';
import { courseModel} from '../../models/courses.model'


@Injectable()
export class CourseEffects {

    constructor(private courseService: CourseService, private actions$: Actions) { }
    @Effect()
    loadCourses$ = this.actions$.pipe(
        ofType(CoursesAction.CoursesActionTypes.LoadAllCourses),
        mergeMap((action: CoursesAction.LoadAllCourses) =>
            this.courseService.getAllCourses().pipe(
            map((courses: courseModel[]) => (
                new CoursesAction.LoadAllCoursesSuccess(courses["courses"])))
        ))
        
    )

   
}
