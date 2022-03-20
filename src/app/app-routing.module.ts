import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthorizedGuard } from './authorization/guards/not-authorized.guard';

const routes: Routes = [
  {
    path: 'registration',
    loadChildren: () =>
      import('./features/Registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
      canActivate: [NotAuthorizedGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
    canActivate: [NotAuthorizedGuard],
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./features/Courses/courses.module').then((m) => m.CoursesModule),
  },
  { path: '**', redirectTo: '/courses', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
