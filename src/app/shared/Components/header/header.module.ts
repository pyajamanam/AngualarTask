import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconModule } from "../icon/icon.module";
import { HeaderComponent } from ".";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, IconModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
