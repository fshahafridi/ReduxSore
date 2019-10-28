
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { CoursesComponent } from './component/courses.component'
import { StoreModule } from '@ngrx/store';
import { CourseReducer } from './store/reducers/courses.reducer'
import { CourseService } from './services/course.service';
import { EffectsModule } from '@ngrx/effects';
import { CourseEffects } from './store/effects/courses.effects';
import { CommonModule } from '@angular/common';
import { CoursesEdit } from './component/courses-edit.component';

@NgModule({
  declarations: [
        CoursesComponent,
        CoursesEdit
  ],
    imports: [
        CommonModule,
        StoreModule.forFeature('courses', CourseReducer),
        EffectsModule.forFeature([CourseEffects]),
    RouterModule.forChild([
        { path: '', component: CoursesComponent }
    ])
  ],
    providers: [CourseService]
})
export class CoursesModule { }
