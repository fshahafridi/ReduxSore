import { courseModel } from '../../models/courses.model';
import * as fromRoot from '../../../state/app.state';
import { EntityState } from '@ngrx/entity';

//State for the course module only... this will be used in the reducer and components...
export interface CourseState extends  EntityState<courseModel> {
    selectedCourseId: number | null;
}

//Combine state with with the root or app state... we will this state in selector...
export interface State extends fromRoot.AppState {
    courses: CourseState
}
