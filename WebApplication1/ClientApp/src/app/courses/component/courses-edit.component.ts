import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as CoursesAction from '../store/actions/actions'
import * as fromCourses from '../store/state/courses.state'
import * as fromSelectors from '../store/selectors/course.selector'
import { courseModel } from "../models/courses.model";
import { takeWhile } from "rxjs/operators";



@Component({
    selector: 'courses-edit',
    templateUrl: './courses-edit.component.html',
})
export class CoursesEdit implements OnInit, OnDestroy {



    selectedCourse: courseModel;
    componentActive: boolean = true;
    constructor(private store: Store<fromCourses.State>) {
    }

    ngOnInit(): void {

        this.initStore();
    }
    ngOnDestroy(): void {

        this.componentActive = false
    }
    updateCourse() {

        //var newCourece: courseModel = {
        //    courseId: this.selectedCourse.courseId,
        //    courseName: "New Course Name After Edit",
        //    autherName: "New Author"
        //}

    }
    initStore() {

        //this.store.pipe(select(fromSelectors.getCourse),
        //    takeWhile(() => this.componentActive)).subscribe(
        //        selectedCourse => {
        //            this.selectedCourse = selectedCourse;
        //        });
    }


}
