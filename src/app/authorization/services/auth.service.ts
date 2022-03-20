import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';

import * as DTO from '../../shared/dto';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthorized$$: BehaviorSubject<true | false>;

  isAuthorized$: Observable<boolean>;

  constructor(
    private sessionStorageService: SessionStorageService,
    private http: HttpClient,
    private router: Router
  ) {
    const token = this.sessionStorageService.getToken();

    const initState = token != null ? true : false;

    this.isAuthorized$$ = new BehaviorSubject(initState);

    this.isAuthorized$ = this.isAuthorized$$.asObservable();
  }

  login(creds: DTO.Credentials) {
    this.http
      .post<{ successful: boolean; result: string }>(
        'http://localhost:3000/login',
        JSON.stringify(creds),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .pipe(
        map((response) => {
          if (response.successful === true) {
            console.log('successful login');
            this.sessionStorageService.setToken(response.result);
            this.isAuthorized$$.next(true);
            this.router.navigate(['/courses']);
          }
        })
      )
      .subscribe();
  }

  register(creds: DTO.User) {
    this.http
      .post<{ successful: boolean; result: string }>(
        'http://localhost:3000/register',
        JSON.stringify(creds),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .pipe(
        map((response) => {
          if (response.successful === true) {
            this.login({ email: creds.email, password: creds.password });
          }
        })
      )
      .subscribe();
  }

  logout() {
    if (this.isAuthorized$$.value != true) {
      return;
    }

    const token = this.sessionStorageService.getToken();

    if (token == null) {
      return;
    }

    this.http.delete('http://localhost:3000/logout').subscribe();

    this.isAuthorized$$.next(false);
    this.sessionStorageService.deleteToken();
  }
}
