import { Directive } from '@angular/core';

@Directive({
  selector: '[appTogglePassword]',
  exportAs: 'passwordToggler',
})
export class TogglePasswordDirective {
  private _isHidden = true;

  constructor() {}

  toggle() {
    this._isHidden = !this._isHidden;
  }

  get isHidden() {
    return this._isHidden;
  }

  get type() {
    return this._isHidden ? 'password' : 'text';
  }
}
