import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthorsStateFacade } from 'src/app/store/authors/authors.facade';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedGuard implements CanLoad {
  constructor(private authfacade: AuthorsStateFacade, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.isAuthorized$.pipe(
      take(1),
      map((isAuthorized) => {
        if (isAuthorized) {
          return true;
        }

        return this.router.createUrlTree(['/login']);
      })
    );
  }
}
