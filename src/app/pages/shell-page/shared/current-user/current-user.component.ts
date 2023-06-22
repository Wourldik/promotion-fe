import { Component } from '@angular/core';

@Component({
  selector: 'pr-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss']
})
export class CurrentUserComponent {
  isOpened: boolean;

  onMenuToggle(): void {
    this.isOpened = !this.isOpened;
  }
}
