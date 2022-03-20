import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

import * as DTO from '../shared/dto';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorsStoreService {
  private isLoading$$ = new BehaviorSubject<boolean | undefined>(undefined);
  private authors$$ = new BehaviorSubject<DTO.IdName[]>([]);
  private isLoaded = false;

  isLoading$ = this.isLoading$$.asObservable();
  authors$ = this.authors$$.asObservable();

  constructor(private authorsService: AuthorsService) {}

  addAuthor(authorName: string) {
    debugger;
    return new Promise((res, rej) => {
      this.authorsService.addAuthor(authorName).subscribe({
        next: (response) => {
          console.log(response);
          if (response.successful) {
            res(response.result);
            this.authors$$.next([...this.authors$$.value, response.result]);
          } else {
            rej();
          }
        },
      });
    });
  }

  getAll() {
    if (this.isLoaded) {
      return this.authors$;
    }

    if (this.isLoading$$.value === true) {
      return this.authors$;
    }

    this.isLoading$$.next(true);

    this.authorsService.getAll().subscribe({
      next: (response) => {
        console.log(response);
        if (response.successful) {
          this.authors$$.next(response.result);
        }
      },
      complete: () => {
        this.isLoading$$.next(false);
      },
    });

    return this.authors$;
  }
}
