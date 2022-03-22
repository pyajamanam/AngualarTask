import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  find,
  first,
  last,
  map,
  Observable,
  of,
  skipWhile,
  switchMap,
  take,
  takeUntil,
} from 'rxjs';
import { DTO } from 'src/app/shared/shared.module';
import {
  requestAllCourses,
  requestCreateCourse,
  requestDeleteCourse,
  requestEditCourse,
} from './courses.actions';
import { CoursesState } from './courses.reducer';
import { getAllCourses, getIsAllCoursesLoaded } from './courses.selectors';

@Injectable({
  providedIn: 'root',
})
export class CoursesStateFacade {
  allCourses$: Observable<DTO.Course[]>;

  private isAllCoursesLoadedOnce: boolean = false;

  constructor(private store: Store<CoursesState>) {
    this.allCourses$ = this.store.pipe(select(getAllCourses));

    this.store
      .pipe(
        select(getIsAllCoursesLoaded),
        first((isLoaded) => isLoaded === true)
      )
      .subscribe({
        next: () => {
          this.isAllCoursesLoadedOnce = true;
        },
      });
  }

  getAll() {
    if (this.isAllCoursesLoadedOnce) {
      return this.allCourses$;
    }

    this.store.dispatch(requestAllCourses());

    return this.allCourses$.pipe(skipWhile(() => !this.isAllCoursesLoadedOnce));
  }

  getCourse(courseId: string) {
    if (this.isAllCoursesLoadedOnce) {
      return this.allCourses$.pipe(
        take(1),
        map((courses) => courses.find((course) => course.id === courseId))
      );
    }

    return this.getAll().pipe(
      skipWhile(() => !this.isAllCoursesLoadedOnce),
      map((courses) => courses.find((course) => course.id === courseId))
    );
  }

  deleteCourse(courseId: string) {
    this.store.dispatch(requestDeleteCourse({ payload: { courseId } }));
  }

  createCourse(newCourse: DTO.Course) {
    this.store.dispatch(requestCreateCourse({ payload: { newCourse } }));
  }

  editCourse(editedCourse: DTO.Course) {
    this.store.dispatch(requestEditCourse({ payload: { editedCourse } }));
  }
}
