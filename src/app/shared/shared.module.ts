import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './Components/info/info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PipesModule } from './pipes/pipe.module';
import { ButtonModule } from './Components/button/button.module';
import { IconModule } from './Components/icon/icon.module';
import { InfoModule } from './Components/info/info.module';
import { SearchComponent } from './Components/search/search.component';
import { SearchModule } from './Components/search/search.module';
import { HeaderModule } from './Components/header/header.module';
import { EmailCustomValidatorDirective } from './directives/email-custom-validator.directive';
import { PasswordStrengthDirective } from './directives/password-strength-validator.directive';
const COMPONENTS=[
  //  CourseComponent,
  //  SharedComponent,
  //  HeaderComponent,
  //  ButtonComponent,
  // InfoComponent
];

@NgModule({
  declarations:[ EmailCustomValidatorDirective,PasswordStrengthDirective
  ],
  exports:[FontAwesomeModule,PipesModule,ButtonModule,
    EmailCustomValidatorDirective,PasswordStrengthDirective,
    IconModule,InfoModule,SearchModule,HeaderModule],
  imports: [
    CommonModule,
    FontAwesomeModule,
    PipesModule,
    ButtonModule,
    IconModule,
    InfoModule,
    HeaderModule,
    SearchModule
  ]

})
export class SharedModule { }
