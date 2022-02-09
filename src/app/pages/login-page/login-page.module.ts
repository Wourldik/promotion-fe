import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import { shared } from './shared';
import { LayoutModule } from '@layout/layout.module';
import { SharedModule } from '@shared/modules';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    shared,
    CommonModule,
    SharedModule,
    LayoutModule,
    LoginPageRoutingModule,
  ],
})
export class LoginPageModule {}
