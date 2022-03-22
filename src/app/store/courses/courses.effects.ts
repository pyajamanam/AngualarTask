import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';
import { AuthorsStateFacade } from '../authors/authors.facade';

import * as CoursesActions from './courses.actions';

@Injectable()
export class CoursesEffects {
  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.requestAllCourses),
      mergeMap(() => {
        return this.coursesService.getAll().pipe(
          switchMap((courses) => {
            return this.authorsFacade.getAuthors().pipe(
              map((authors) => {
                const coursesWithAuthorsNames = courses.map((course) => {
                  return {
                    ...course,
                    authors: course.authors
                      .map((authorId) => authors.find((a) => a.id === authorId))
                      .filter((author) => author != null)
                      .map((author) => author!.name),
                  };
                });
                return CoursesActions.requestAllCoursesSuccess({
                  payload: coursesWithAuthorsNames,
                });
              })
            );
          }),
          catchError(() => of(CoursesActions.requestAllCoursesFail()))
        );
      })
    )
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.requestDeleteCourse),
      mergeMap((action) => {
        return this.coursesService.deleteCourse(action.payload.courseId).pipe(
          map((response) => {
            if (response.successful) {
              return CoursesActions.requestDeleteCourseSuccess({
                payload: { courseId: action.payload.courseId },
              });
            }

            throw new Error();
          }),
          catchError(() => of(CoursesActions.requestDeleteCourseFail()))
        );
      })
    )
  );

  addCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.requestCreateCourse),
      mergeMap((action) => {
        return this.coursesService.createCourse(action.payload.newCourse).pipe(
          switchMap((response) => {
            if (response.successful) {
              return this.authorsFacade.getAuthors().pipe(
                map((authors) => {
                  const newCourse = {
                    ...response.result,
                    authors: response.result.authors
                      .map((authorId) => authors.find((a) => a.id === authorId))
                      .filter((author) => author != null)
                      .map((author) => author!.name),
                  };

                  return CoursesActions.requestCreateCourseSuccess({
                    payload: { newCourse },
                  });
                })
              );
            }

            throw new Error();
          }),

          catchError(() => of(CoursesActions.requestCreateCourseFail()))
        );
      })
    )
  );

  editCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.requestEditCourse),
      mergeMap((action) => {
        return this.coursesService.editCourse(action.payload.editedCourse).pipe(
          switchMap((response) => {
            if (response.successful) {
              return this.authorsFacade.getAuthors().pipe(
                map((authors) => {
                  const editedCourse = {
                    ...response.result,
                    authors: response.result.authors
                      .map((authorId) => authors.find((a) => a.id === authorId))
                      .filter((author) => author != null)
                      .map((author) => author!.name),
                  };

                  return CoursesActions.requestEditCourseSuccess({
                    payload: { editedCourse },
                  });
                })
              );
            }

            throw new Error();
          }),

          catchError(() => of(CoursesActions.requestEditCourseFail()))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private authorsFacade: AuthorsStateFacade
  ) {}
}
