import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/authorization/services/auth.service';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { DTO } from 'src/app/shared/shared.module';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  isModalVisible = false;
  isAuthorized = true;
  isAdmin = false;

  private __authors: DTO.IdName[] = [];
  private __courses: DTO.Course[] = [];
  private _courses: DTO.Course[] = [];

  private coursesStoreSubscription: Subscription | null = null;
  private authSubscription: Subscription | null = null;
  private authorsSub: Subscription | null = null;
  private isAdminSub: Subscription | null = null;

  constructor(
    private coursesStore: CoursesStoreService,
    private authService: AuthService,
    private userStore: UserStoreService,
    private authorsStore: AuthorsStoreService
  ) {}

  ngOnInit(): void {
    this.coursesStoreSubscription = this.coursesStore.courses$.subscribe({
      next: (courses) => {
        this.courses = courses;
      },
    });
    this.coursesStore.getAll();

    this.authSubscription = this.authService.isAuthorized$.subscribe({
      next: (isAuthorized) => {
        this.isAuthorized = isAuthorized;
      },
    });

    this.isAdminSub = this.userStore.isAdmin$.subscribe({
      next: (isAdmin) => {
        this.isAdmin = isAdmin;
      },
    });

    this.authorsSub = this.authorsStore.authors$.subscribe({
      next: (authors) => {
        this.authors = authors;
      },
    });
    this.authorsStore.getAll();
  }

  set courses(courses: DTO.Course[]) {
    this.__courses = courses;
    this._courses = this.__courses.map((course) => {
      return {
        ...course,
        authors: this.getCourseAuthorsNames(course),
      };
    });
  }

  private getCourseAuthorsNames(course: DTO.Course) {
    return course.authors
      .map((authorId) => {
        const author = this.__authors.find((author) => author.id === authorId);
        return author != null ? author.name : null;
      })
      .filter((author) => author != null) as string[];
  }

  get courses() {
    return this._courses;
  }

  set authors(authors: DTO.IdName[]) {
    this.__authors = authors;
    this.courses = this.__courses;
  }

  search(str: string) {
    this._courses = this.__courses
      .map((course) => {
        return {
          ...course,
          authors: this.getCourseAuthorsNames(course),
        };
      })
      .filter((course) => {
        return Object.values(course).some((val) =>
          JSON.stringify(val).includes(str)
        );
      });
  }

  toggleModal(result: boolean | undefined) {
    console.log('RESULT:', result);
    this.isModalVisible = !this.isModalVisible;
  }

  ngOnDestroy() {
    this.coursesStoreSubscription?.unsubscribe();
    this.coursesStoreSubscription = null;

    this.authSubscription?.unsubscribe();
    this.authSubscription = null;

    this.isAdminSub?.unsubscribe();
    this.isAdminSub = null;

    this.authorsSub?.unsubscribe();
    this.authorsSub = null;
  }

  logout() {
    this.authService.logout();
  }
}
