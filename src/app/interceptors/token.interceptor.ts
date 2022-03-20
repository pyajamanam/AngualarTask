import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../authorization/services/auth.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '../authorization/services/session-storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
    private sessionStorageService: SessionStorageService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.sessionStorageService.getToken();

    const modifiedRequest =
      token != null
        ? request.clone({
            headers: request.headers.set('Authorization', token),
          })
        : request;

    return next.handle(modifiedRequest).pipe(
      tap({
        error: (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401) {
              this.authService.logout();
              this.router.navigate(['/login']);
            }
          }
        },
      })
    );
  }
}
