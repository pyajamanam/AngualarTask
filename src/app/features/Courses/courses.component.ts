import { Component, OnInit } from '@angular/core';
import { mockedCourseList } from "src/assets/mocks";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { 
  this.mockedCourseList = [...mockedCourseList];
  }
  buttonText :string="Show the course";
  mockedCourseList:Array<any> =[];
  editable :boolean=true;
  ngOnInit(): void {
    
  }
}
