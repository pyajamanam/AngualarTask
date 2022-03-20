import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as DTO from '../shared/dto';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private http: HttpClient) {}

  addAuthor(authorName: string) {
    return this.http.post<{ successful: true; result: DTO.IdName }>(
      'http://localhost:3000/authors/add',
      JSON.stringify({ name: authorName }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  getAll() {
    return this.http.get<{ successful: true; result: DTO.IdName[] }>(
      'http://localhost:3000/authors/all'
    );
  }
}
