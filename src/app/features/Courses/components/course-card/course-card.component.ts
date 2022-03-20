import { Component, Input, OnInit } from '@angular/core';
import { Required } from 'src/app/shared/decorators';

const EMPTY_VALUE = '(Empty)';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input() title: string = EMPTY_VALUE;
  @Input() description: string = EMPTY_VALUE;
  @Input() @Required() creationDate!: Date | string;
  @Input() duration?: number;
  @Input() authors: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
