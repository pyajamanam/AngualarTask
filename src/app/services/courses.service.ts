import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

import * as DTO from '../shared/dto';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  createCourse(course: DTO.Course) {
    return this.http.post<{ successful: boolean; result: DTO.Course }>(
      'http://localhost:3000/courses/add',
      JSON.stringify(course),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  editCourse(course: DTO.Course) {
    return this.http.put<{ successful: boolean; result: DTO.Course }>(
      `http://localhost:3000/courses/${course.id}`,
      JSON.stringify(course),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  getCourse(id: string) {
    return this.http.get<{ successful: boolean; result: DTO.Course }>(
      `http://localhost:3000/courses/${id}`
    );
  }

  deleteCourse(id: string) {
    return this.http.delete<{ successful: boolean }>(
      `http://localhost:3000/courses/${id}`
    );
  }

  getAll(): Observable<DTO.Course[]> {
    return this.http
      .get<{ successful: boolean; result: DTO.Course[] }>(
        'http://localhost:3000/courses/all'
      )
      .pipe(
        map((response) => {
          return response.result;
        }),
        catchError((err) => {
          return of([]);
        })
      );
  }
}
