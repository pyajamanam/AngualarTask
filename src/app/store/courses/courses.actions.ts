import { createAction, props } from '@ngrx/store';
import { DTO } from 'src/app/shared/shared.module';

export const requestAllCourses = createAction('requestAllCourses');

export const requestAllCoursesSuccess = createAction(
  'requestAllCoursesSuccess',
  props<{ payload: DTO.Course[] }>()
);

export const requestAllCoursesFail = createAction('requestAllCoursesFail');

export const requestSingleCourse = createAction('requestSingleCourse');

export const requestSingleCourseSuccess = createAction(
  'requestSingleCourseSuccess'
);

export const requestSingleCourseFail = createAction('requestSingleCourseFail');

export const requestFilteredCourses = createAction('requestFilteredCourses');

export const requestFilteredCoursesSuccess = createAction(
  'requestDeleteCourse'
);

export const requestDeleteCourse = createAction(
  'requestDeleteCourse',
  props<{ payload: { courseId: string } }>()
);

export const requestDeleteCourseSuccess = createAction(
  'requestDeleteCourseSuccess',
  props<{ payload: { courseId: string } }>()
);

export const requestDeleteCourseFail = createAction('requestDeleteCourseFail');

export const requestEditCourse = createAction(
  'requestEditCourse',
  props<{ payload: { editedCourse: DTO.Course } }>()
);

export const requestEditCourseSuccess = createAction(
  'requestEditCourseSuccess',
  props<{ payload: { editedCourse: DTO.Course } }>()
);

export const requestEditCourseFail = createAction('requestEditCourseFail');

export const requestCreateCourse = createAction(
  'requestCreateCourse',
  props<{ payload: { newCourse: DTO.Course } }>()
);

export const requestCreateCourseSuccess = createAction(
  'requestCreateCourseSuccess',
  props<{ payload: { newCourse: DTO.Course } }>()
);

export const requestCreateCourseFail = createAction('requestCreateCourseFail');
