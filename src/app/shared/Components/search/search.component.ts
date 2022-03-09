import {
  Component,
  ChangeDetectionStrategy,
  Output,
  Input,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  @Input() placeholder = "Search...";
  @Output() searchResult: any = new EventEmitter<string>();

  public searchInput = "";

  onSearch() {
    this.searchResult.emit(this.searchResult);
  }
}
