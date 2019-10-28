
import { CourseAction, CoursesActionTypes } from '../actions/actions';
import { CourseState } from '../state/courses.state'
import { createEntityAdapter } from '@ngrx/entity';
import { courseModel } from '../../models/courses.model';


export const courseAdapter = createEntityAdapter<courseModel>();

const initialState: CourseState = courseAdapter.getInitialState();



export function CourseReducer(state = initialState, action: CourseAction): CourseState{
    switch (action.type) {

        case CoursesActionTypes.LoadAllCoursesSuccess:

            return courseAdapter.addAll(action.payload, state);

        //case CoursesActionTypes.SetCurrentCourse:
        //    return {
        //        ...state, selectedCourse: action.payload
        //    };

        //case CoursesActionTypes.ShowCourses:
        //    console.log("existing state:" + JSON.stringify(state));
        //    console.log("Payload" + action.payload);

        //    return { 
        //        ...state, isCourseAvailable: action.payload
        //    }; 
        //case CoursesActionTypes.AddCourse:
        //    return {
        //        ...state, allCoursers: action.payload
        //    };
        //case CoursesActionTypes.RemoveCourse:
        //    return {
        //        ...state, selectedCourse: action.payload
        //    };
        default:
            return state;
    }

}
////////////// ///////////Selectors////////////////////////
// get the selectors
const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
    } = courseAdapter.getSelectors();


export const loadAllCourses = selectAll;

