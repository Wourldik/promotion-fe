import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@layout/layout.module';
import { SharedModule } from '@shared/modules';
import { RecoveryFormComponent } from './recovery-form.component';

@NgModule({
  declarations: [RecoveryFormComponent],
  imports: [CommonModule, SharedModule, LayoutModule],
  exports: [RecoveryFormComponent],
})
export class RecoveryFormModule {}
