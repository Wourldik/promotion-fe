import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/modules';
import { InputComponent } from './input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [SharedModule],
  exports: [InputComponent],
})
export class InputModule {}
