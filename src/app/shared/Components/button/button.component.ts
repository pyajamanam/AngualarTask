import { Component, Input, OnInit } from '@angular/core';

import * as Icons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text = '';
  @Input() rightIconName?: keyof typeof Icons;
  @Input() leftIconName?: keyof typeof Icons;
  @Input() disabled = false;

  rightIcon: Icons.IconDefinition | null = null;
  leftIcon: Icons.IconDefinition | null = null;

  constructor() {}

  ngOnInit(): void {
    this.rightIcon = this.rightIconName
      ? (Icons[this.rightIconName] as Icons.IconDefinition)
      : null;
    this.leftIcon = this.leftIconName
      ? (Icons[this.leftIconName] as Icons.IconDefinition)
      : null;
  }
}
