import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, map } from 'rxjs';

import * as DTO from '../shared/dto';

import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesStoreService {
  private courses$$ = new BehaviorSubject<DTO.Course[]>([]);
  private isLoading$$ = new BehaviorSubject<boolean | undefined>(undefined);

  courses$ = this.courses$$.asObservable();
  isLoading$ = this.isLoading$$.asObservable();

  constructor(private coursesService: CoursesService) {}

  getAll() {
    if (this.isLoading$$.value === true) {
      return;
    }

    this.isLoading$$.next(true);

    const request = this.coursesService.getAll();

    const sub = request.subscribe({
      next: (courses) => {
        this.courses$$.next(courses);
        sub.unsubscribe();
      },
      complete: () => {
        this.isLoading$$.next(false);
      },
    });
  }

  createCourse(course: DTO.Course) {
    this.coursesService.createCourse(course).subscribe({
      next: (response) => {
        if (response.successful) {
          this.courses$$.next([...this.courses$$.value, response.result]);
        }
      },
    });
  }

  editCourse(course: DTO.Course) {
    return new Promise((res) => {
      this.coursesService.editCourse(course).subscribe({
        next: (response) => {
          if (response.successful) {
            this.courses$$.next([
              ...this.courses$$.value.filter((c) => c.id !== course.id),
              response.result,
            ]);
          }

          res(response.successful);
        },
        error: () => res(false),
      });
    });
  }

  getCourse(id: string): Promise<DTO.Course> {
    const course = this.courses$$.value.find((course) => course.id === id);

    if (course != null) {
      return Promise.resolve(course);
    }

    return new Promise((res, rej) => {
      this.coursesService.getCourse(id).subscribe((response) => {
        if (response.successful) {
          this.courses$$.next([...this.courses$$.value, response.result]);
          res(response.result);
        } else {
          rej();
        }
      });
    });
  }

  deleteCourse(id: string) {
    this.coursesService.deleteCourse(id).subscribe({
      next: (response) => {
        if (response.successful) {
          this.courses$$.next(
            this.courses$$.value.filter((course) => course.id !== id)
          );
        }
      },
    });
  }
}
