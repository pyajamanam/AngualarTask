import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { coursesFeatureKey, coursesReducer } from './courses/courses.reducer';
import { CoursesEffects } from './courses/courses.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(coursesFeatureKey, coursesReducer),
    EffectsModule.forFeature([CoursesEffects]),
    CommonModule,
  ],
})
export class CoursesStoreModule {}
