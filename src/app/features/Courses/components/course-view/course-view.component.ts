import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { DTO } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.scss'],
})
export class CourseViewComponent implements OnInit {
  course: DTO.Course | null = null;
  courseId: string | null = null;

  constructor(
    private coursesStore: CoursesStoreService,
    private authorsStore: AuthorsStoreService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id != null) {
        this.loadCourse(id);
      }
    });
  }

  private loadCourse(id: string) {
    console.log('load course');
    this.courseId = id;
    this.coursesStore
      .getCourse(id)
      .then((course) => {
        this.authorsStore
          .getAll()
          .pipe(take(1))
          .subscribe({
            next: (allAuthors) => {
              const authors = course.authors
                .map(
                  (authorId) =>
                    allAuthors.find((author) => author.id === authorId)?.name
                )
                .filter((author) => author != null) as string[];

              this.course = {
                ...course,
                authors,
              };
            },
          });
      })
      .catch(() => {
        this.router.navigate(['/courses']);
      });
  }
}
