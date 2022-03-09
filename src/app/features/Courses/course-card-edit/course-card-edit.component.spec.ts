import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardEditComponent } from './course-card-edit.component';

describe('CourseCardEditComponent', () => {
  let component: CourseCardEditComponent;
  let fixture: ComponentFixture<CourseCardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCardEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
