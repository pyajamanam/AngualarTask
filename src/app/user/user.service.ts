import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http
      .get<{
        successful: boolean;
        result: { name: string; role: string };
      }>('http://localhost:3000/users/me')
      .pipe(
        map((response) => {
          if (response.successful) {
            return response.result;
          }

          return null;
        })
      );
  }
}
