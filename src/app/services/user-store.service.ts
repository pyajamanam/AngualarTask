import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../authorization/services/auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  private isAdmin$$ = new BehaviorSubject(false);
  private name$$ = new BehaviorSubject('');

  isAdmin$ = this.isAdmin$$.asObservable();
  name$ = this.name$$.asObservable();

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
    authService.isAuthorized$.subscribe({
      next: (isAuthorized) => {
        if (isAuthorized) {
          this.getUser();
        } else {
          this.isAdmin$$.next(false);
          this.name$$.next('');
        }
      },
    });
  }

  getUser() {
    this.userService.getUser().subscribe({
      next: (userInfo) => {
        if (userInfo == null) {
          this.isAdmin$$.next(false);
          this.name$$.next('');
        } else {
          this.isAdmin$$.next(userInfo.role === 'admin');
          this.name$$.next(userInfo.name);
        }
      },
    });
  }
}
