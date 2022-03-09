import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }
 @Input() type: string = "button";
  @Input() addedClass = "";
  @Input() label = "";
  @Input() icon: IconDefinition | null = null;
  @Input() width = 24;
  @Input() height = 24;
  ngOnInit(): void {
  }
  @Output() clickChange = new EventEmitter();

  onClick(): void {
    this.clickChange.emit();
  }
}
