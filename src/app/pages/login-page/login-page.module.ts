import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import { shared } from './shared';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [shared, CommonModule, LoginPageRoutingModule],
})
export class LoginPageModule {}
