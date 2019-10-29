import { courseModel } from '../../models/courses.model';
import * as fromRoot from '../../../state/app.state';
import { EntityState } from '@ngrx/entity';


//Create State for the Listing Component only... we can add more properties...
export interface CourseListingState extends  EntityState<courseModel> {
    selectedCourseId: number | null;
}




////Combine state with with the root or app state... we will this state in selector...
//export interface State extends fromRoot.AppState {
//    courses: CourseState
//}
