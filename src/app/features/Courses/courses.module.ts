import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseEditComponent } from './components/course-edit/course-edit.component';
import { CourseViewComponent } from './components/course-view/course-view.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseCardComponent,
    CourseListComponent,
    CourseFormComponent,
    CourseEditComponent,
    CourseViewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    CoursesRoutingModule,
    HttpClientModule
  ],
  exports: [CoursesComponent, CourseCardComponent],
})
export class CoursesModule {}
