import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-icon",
  templateUrl: "./icon.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnInit {
  @Input() icon: IconDefinition | undefined;

  constructor() {}

  ngOnInit(): void {}
}
