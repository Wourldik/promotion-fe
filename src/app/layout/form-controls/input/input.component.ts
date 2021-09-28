import { Component, Input } from '@angular/core';

@Component({
  selector: 'pr-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input()
  placeholder: string | undefined;

  constructor() {}
}
