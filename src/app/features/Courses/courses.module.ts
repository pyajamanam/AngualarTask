import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { CoursesComponent } from "./courses.component";
import { CourseListModule } from "./course-list/course-list.module";
import { CourseCardModule } from "./course-list/course-card/course-card.module";
import { CourseCardEditModule } from "./course-card-edit/course-card-edit.module";

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    CourseListModule,
    CourseCardModule,
    SharedModule,
  ],
  exports: [
    CourseListModule,
    CourseCardModule,
    CoursesComponent,
    SharedModule,
    CourseCardEditModule
  ],
})
export class CoursesModule {}
