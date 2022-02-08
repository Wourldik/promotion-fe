import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {SharedModule} from "@shared/modules";
import { LoginFormComponent } from './login-form.component';
import {LayoutModule} from "@layout/layout.module";

@NgModule({
  declarations: [LoginFormComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, LayoutModule],
  exports: [LoginFormComponent],
})
export class LoginFormModule {}
