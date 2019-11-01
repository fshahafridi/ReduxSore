import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as CoursesAction from '../store/actions/actions'
import * as fromCourses from '../store'
import * as fromSelectors from '../store/selectors/course.selector'
import * as appActions from '../../Shared/store/actions/app.actions'

import { courseModel } from "../models/courses.model";
import { takeWhile } from "rxjs/operators";
import { Observable } from "rxjs";



@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit, OnDestroy {

   // allcourses$: Observable<courseModel[]>;

    allcourses: courseModel[];
    componentActive: boolean = true;
    isLoading$: Observable<boolean>;
    constructor(private store: Store<fromCourses.State>) {
    }

    ngOnInit(): void {

        //Suscribe to the Changes in the store...
        this.initStore();
        //Load the course from Server...
        this.loadAllCourse();



    }
    ngOnDestroy(): void {

        this.componentActive = false
    }

    initStore() {



        this.isLoading$ = this.store.pipe(select(fromSelectors.isLoading))
       // this.allcourses$=  this.store.pipe(select(fromSelectors.selectAllCourses));
        this.store.pipe(select(fromSelectors.selectAllCourses),
            takeWhile(() => this.componentActive)).subscribe(
                allcourses => {
                    this.allcourses = allcourses;
                });

    }

    DeleteCourse(course: courseModel) {
        this.store.dispatch(new CoursesAction.DeleteCourse(course.courseId));
    }

    addNewCourse() {
       var  CourseId = Math.floor(Math.random() * Math.floor(1000));
        this.store.dispatch(new CoursesAction.AddCourse({ courseId: CourseId, courseName: "new Course", autherName: "Test Author" }));
     }
    loadAllCourse() {
        //This will call the action and the ction will call the effects.. the effect will look for the ofType  and call the
        //load secuuess acction method...
        //   this.store.dispatch(new appActions.ShowSpinner(true));
        this.store.dispatch(new CoursesAction.LoadAllCourses());
    }
    editCourse(courseModelParam: courseModel) {
        this.store.dispatch(new CoursesAction.SetCurrentCourse(courseModelParam))

    }

}
