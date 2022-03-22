import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { last, Observable, take } from 'rxjs';
import { DTO } from 'src/app/shared/shared.module';
import { requestAddAuthor, requestAuthors } from './authors.actions';
import { AuthorsState } from './authors.reducer';
import { getAddedAuthors, getAuthors } from './authors.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthorsStateFacade {
  authors$: Observable<DTO.IdName[]>;
  addedAuthors$: Observable<DTO.IdName[]>;

  constructor(private store: Store<AuthorsState>) {
    this.authors$ = this.store.pipe(select(getAuthors));
    this.addedAuthors$ = this.store.pipe(select(getAddedAuthors));
  }

  getAuthors() {
    this.store.dispatch(requestAuthors());
    return this.authors$.pipe(take(2), last());
  }

  addAuthor(authorName: string) {
    this.store.dispatch(requestAddAuthor({ payload: { authorName } }));
    return this.authors$.pipe(take(2), last());
  }
}
