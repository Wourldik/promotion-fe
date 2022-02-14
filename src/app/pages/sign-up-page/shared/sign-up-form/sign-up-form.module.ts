import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpFormComponent } from './sign-up-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/modules';
import { LayoutModule } from '@layout/layout.module';

@NgModule({
  declarations: [SignUpFormComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, LayoutModule],
  exports: [SignUpFormComponent],
})
export class SignUpFormModule {}
