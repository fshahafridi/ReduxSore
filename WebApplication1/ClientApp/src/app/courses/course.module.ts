
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module'

import { CoursesComponent } from './component/courses.component'
import { StoreModule } from '@ngrx/store';
import { CourseService } from './services/course.service';
import { EffectsModule } from '@ngrx/effects';
import { CourseEffects } from './store/effects/courses.effects';
import { CommonModule } from '@angular/common';
import { CoursesEdit } from './component/courses-edit.component';
import { CourseReducer } from './store/reducers/courses.reducer';
import { reducers } from './store';

@NgModule({
  declarations: [
        CoursesComponent,
        CoursesEdit
  ],
    imports: [
        CommonModule,
        SharedModule,
     //   StoreModule.forFeature('courses', CourseReducer),
        StoreModule.forFeature('courses',reducers),
        EffectsModule.forFeature([CourseEffects]),
    RouterModule.forChild([
        { path: '', component: CoursesComponent }
    ])
  ],
    providers: [CourseService]
})
export class CoursesModule { }
