import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';
import { AuthorsService } from 'src/app/services/authors.service';
import { CoursesStoreService } from 'src/app/services/courses-store.service';

import { Validators as AppValidators } from 'src/app/shared/directives';
import { DTO } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: [
    './course-form.component.scss',
  ],
})
export class CourseFormComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    authors: new FormArray([], [Validators.required, Validators.minLength(1)]),
    duration: new FormControl('', [Validators.required, Validators.min(1)]),
    newAuthor: new FormControl(undefined, [
      new AppValidators.NameValidatorDirective().validate,
    ]),
  });

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
              this.form.controls['title'].setValue(course.title);
              this.form.controls['description'].setValue(course.description);
              this.form.controls['duration'].setValue(String(course.duration));

              course.authors
                .map((authorId) =>
                  allAuthors.find((author) => author.id === authorId)
                )
                .filter((author) => author != null)
                .forEach((author) =>
                  (this.form.controls['authors'] as FormArray).push(
                    new FormControl(author)
                  )
                );
            },
          });
      })
      .catch(() => {
        this.router.navigate(['/courses']);
      });
  }

  onSubmit() {
    debugger;
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    if (this.form.valid) {
      const course: DTO.Course = {
        ...this.form.value,
        duration: +this.form.value.duration,
        authors: (this.form.value.authors as DTO.IdName[]).map(
          (author) => author.id
        ),
        newAuthor: null,
      };

      if (this.courseId == null) {
        this.coursesStore.createCourse(course);
      } else {
        this.coursesStore.editCourse({ ...course, id: this.courseId });
      }

      this.router.navigate(['/courses']);
    } else {
      console.log('not valid', this.form);
    }
  }

  removeAuthor(index: number) {
    (this.form.controls['authors'] as FormArray).removeAt(index);
  }

  addAuthor(e: Event) {
    debugger;
    e.preventDefault();
    const newAuthor = this.form.controls['newAuthor'] as FormControl;

    newAuthor.markAllAsTouched();
    if (newAuthor.valid) {
      this.authorsStore.addAuthor(newAuthor.value as string).then((author) => {
        (this.form.controls['authors'] as FormArray).push(
          new FormControl(author)
        );
      });

      newAuthor.reset();
    }
  }

  get newAuthor() {
    return this.form.get('newAuthor')!;
  }

  get title() {
    return this.form.get('title')!;
  }

  get description() {
    return this.form.get('description')!;
  }

  get duration() {
    return this.form.get('duration')!;
  }

  get authors() {
    return this.form.get('authors')!;
  }
}
