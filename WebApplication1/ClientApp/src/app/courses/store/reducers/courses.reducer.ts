
import { CourseAction, CoursesActionTypes } from '../actions/actions';
import { CourseListingState } from '../state/courses.state'
import { createEntityAdapter } from '@ngrx/entity';
import { courseModel } from '../../models/courses.model';


export const courseAdapter = createEntityAdapter<courseModel>({
    // This property must be set to the Primary Key in The Collection. If the Collection contains the Primary Key with Name "id" then it is not required...
    //Otherwise map the Id from the collection to the selectId
    selectId: (course: courseModel) => course.courseId

});

const initialState: CourseListingState = courseAdapter.getInitialState({

    selectedCourseId: null,
    isloading: false,
    error: ""
});



export function CourseReducer(state = initialState, action: CourseAction): CourseListingState {
    switch (action.type) {

        case CoursesActionTypes.LoadAllCoursesSuccess:
            return courseAdapter.addAll(action.payload, { ...state, isloading: false });

        case CoursesActionTypes.LoadAllCourses:
            return { ...state, isloading: true };

        case CoursesActionTypes.AddCourse:
            return { ...state, isloading: true }


        case CoursesActionTypes.AddCourseSuccess:
            return courseAdapter.addOne(action.payload, { ...state, isloading: false });

        case CoursesActionTypes.AddCourseFailed:
            return { ...state, isloading: false, error: action.errorPayload }


        case CoursesActionTypes.DeleteCourse:
            return courseAdapter.removeOne(action.payload, { ...state, isloading: true });

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

//export const isLoading= (state: CourseListingState) => state.isloading;
