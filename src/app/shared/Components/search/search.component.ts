import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Input() placeholder = '';
  @Output() searchEvent = new EventEmitter();

  input = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('form submitted');
      this.searchEvent.emit(form.controls['input'].value);
    } else {
      Object.keys(form.controls).forEach((key) => {
        form.form.controls[key].markAsTouched();
      });
    }
  }
}
