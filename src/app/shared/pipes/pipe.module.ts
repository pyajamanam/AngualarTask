import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MinutesToHours } from "./m2h.pipe";
import { DateConverter } from "./date.pipe";
import { StringJoinerPipe } from "./string-joiner-pipe";
@NgModule({
  declarations: [MinutesToHours,DateConverter,StringJoinerPipe],
  imports: [CommonModule],
  exports: [DateConverter, MinutesToHours,StringJoinerPipe],
})
export class PipesModule {}
