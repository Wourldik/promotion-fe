import { Component, Input } from '@angular/core';

@Component({
  selector: 'pr-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input()
  placeholder: string | undefined;

  constructor() {}
}
