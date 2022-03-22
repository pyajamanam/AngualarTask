import { Action, createReducer, on } from '@ngrx/store';

import { DTO } from 'src/app/shared/shared.module';

import * as Actions from './courses.actions';

export const coursesFeatureKey = 'courses';

export interface CoursesState {
  allCourses: DTO.Course[];
  courses: DTO.Course[];
  course: DTO.Course | null;
  isAllCoursesLoading: boolean;
  isAllCoursesLoaded: boolean;
  isSingleCourseLoading: boolean;
  isSearchState: boolean;
  errorMessage: string | null;
}

const initialState: CoursesState = {
  allCourses: [],
  courses: [], // ?
  course: null, // ?
  isAllCoursesLoading: false,
  isAllCoursesLoaded: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMessage: null,
};

const reducer = createReducer(
  initialState,
  on(Actions.requestAllCoursesSuccess, (state, action) => {
    return {
      ...state,
      allCourses: action.payload,
      isAllCoursesLoading: false,
      isAllCoursesLoaded: true,
    };
  }),
  on(Actions.requestDeleteCourseSuccess, (state, action) => {
    console.log('DELETE');
    return {
      ...state,
      allCourses: state.allCourses.filter(
        (course) => course.id !== action.payload.courseId
      ),
    };
  }),
  on(Actions.requestCreateCourseSuccess, (state, action) => {
    return {
      ...state,
      allCourses: [...state.allCourses, action.payload.newCourse],
    };
  }),
  on(Actions.requestEditCourseSuccess, (state, action) => {
    return {
      ...state,
      allCourses: [
        ...state.allCourses.filter(
          (course) => course.id !== action.payload.editedCourse.id
        ),
        action.payload.editedCourse,
      ],
    };
  })
);

export const coursesReducer = (
  state: CoursesState,
  action: Action
): CoursesState => reducer(state, action);
