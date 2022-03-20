import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/authorization/guards/admin.guard';
import { CourseEditComponent } from './components/course-edit/course-edit.component';
import { CourseViewComponent } from './components/course-view/course-view.component';
import { CoursesComponent } from './components/courses/courses.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
  },
  {
    path: 'view/:id',
    component: CourseViewComponent,
  },
  {
    path: 'add',
    component: CourseEditComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'edit/:id',
    component: CourseEditComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
