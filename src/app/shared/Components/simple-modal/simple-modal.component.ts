import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Required } from '../../decorators';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.scss'],
})
export class SimpleModalComponent implements OnInit {
  @Input() @Required() title!: string;
  @Input() @Required() message!: string;
  @Input() okButtonText = 'OK';
  @Input() cancelButtonText = 'Cancel';

  @Output() resultEvent = new EventEmitter<boolean | undefined>();

  constructor() {}

  ngOnInit(): void {}

  closeWithResult(result: boolean | undefined) {
    this.resultEvent.emit(result);
  }
}
