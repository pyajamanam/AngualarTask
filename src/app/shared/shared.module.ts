import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as Components from './Components/index';
import * as Pipes from './pipes';
import * as Directives from './directives/';
import { FormsModule } from '@angular/forms';

export * as DTO from './dto';

const COMPONENTS = [
  Components.HeaderComponent,
  Components.ButtonComponent,
  Components.SimpleModalComponent,
  Components.InfoComponent,
  Pipes.DurationPipe,
  Directives.EmailCustomValidatorDirective,
  Directives.AlphaNumericValidator,
  Components.SearchComponent,
  Pipes.CreationDatePipe,
  Directives.TogglePasswordDirective,
  Directives.AlphaNumericValidator,
  Directives.EmailCustomValidatorDirective,
  Directives.PasswordStrengthDirective,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  exports: [...COMPONENTS, FontAwesomeModule],
})
export class SharedModule {}
