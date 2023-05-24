import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import { shared } from './shared';
import { LayoutModule } from '@layout/layout.module';
import { SharedModule } from '@shared/modules';
import {LoginService} from "./services";

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    shared,
    CommonModule,
    SharedModule,
    LayoutModule,
    LoginPageRoutingModule,
  ],
  providers: [LoginService],
})
export class LoginPageModule {}
