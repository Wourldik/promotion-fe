import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/modules';
import { LogoutButtonComponent } from './logout-button.component';

@NgModule({
  declarations: [LogoutButtonComponent],
  imports: [SharedModule],
  exports: [LogoutButtonComponent],
})
export class LogoutButtonModule {}
