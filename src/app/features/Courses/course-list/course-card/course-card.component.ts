import { Component, Input, OnInit } from '@angular/core';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
import { CourseItem } from './course-item.model';
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
@Input() card: CourseItem | undefined;
@Input() editable:boolean=false;
  constructor() { }

  ngOnInit(): void {
    
  }
}
