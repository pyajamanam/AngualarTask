import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

const TOKEN_KEY = 'TOKEN';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  private storage: Storage;

  constructor(@Inject(DOCUMENT) document: Document) {
    const window = document.defaultView;

    if (window == null) {
      throw new Error();
    }

    this.storage = window.sessionStorage;
  }

  setToken(token: string) {
    this.storage.setItem(TOKEN_KEY, token);
  }

  getToken(): string | null {
    return this.storage.getItem(TOKEN_KEY);
  }

  deleteToken() {
    this.storage.removeItem(TOKEN_KEY);
  }
}
