import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { DTO } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  @Input() courses: DTO.Course[] = [];
  @Input() isCoursesEditable = true;
  @Output() removeItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<DTO.COURSES.ICourseCard>();

  isModalVisible = false;

  constructor(private coursesStore: CoursesStoreService) {}

  ngOnInit(): void {}

  delete(id: string) {
    debugger;
    this.confirmDelete = (decision: boolean | undefined) => {
      this.isModalVisible = false;
      if (decision === true) {
        this.coursesStore.deleteCourse(id);
      }
    };
    this.isModalVisible = true;
  }

  confirmDelete = (decision: boolean | undefined) => {};
}
