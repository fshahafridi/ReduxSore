import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as CoursesAction from '../store/actions/actions'
import * as fromCourses from '../store/state/courses.state'
import * as fromSelectors from '../store/selectors/course.selector'
import { courseModel } from "../models/courses.model";
import { takeWhile } from "rxjs/operators";



@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit, OnDestroy {

    toggelCourse: boolean = false;

    allcourses: courseModel[];
    componentActive: boolean = true;
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
        

        this.store.pipe(select(fromSelectors.selectAllCourses),
            takeWhile(() => this.componentActive)).subscribe(
                allcourses => {
                    this.allcourses = allcourses;
                });
    }

    ShowHide() {
        this.store.dispatch(new CoursesAction.ShowCourses(true));
    }
    loadAllCourse() {
        //This will call the action and the ction will call the effects.. the effect will look for the ofType  and call the
        //load secuuess acction method...
        this.store.dispatch(new CoursesAction.LoadAllCourses());
    }
    editCourse(courseModelParam: courseModel) {

     
        this.store.dispatch(new CoursesAction.SetCurrentCourse(courseModelParam))

    }

}
