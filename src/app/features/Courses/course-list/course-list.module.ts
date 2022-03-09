import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseListComponent } from "./course-list.component";
import { CourseCardModule } from "./course-card/course-card.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CourseCardEditModule } from "../course-card-edit/course-card-edit.module";

@NgModule({
  declarations: [CourseListComponent],
  imports: [CommonModule, CourseCardModule, CourseCardEditModule, SharedModule],
  exports: [CourseListComponent],
})
export class CourseListModule {}
