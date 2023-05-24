import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpPageRoutingModule } from './sign-up-page-routing.module';
import { SignUpPageComponent } from './sign-up-page.component';
import { LayoutModule } from '@layout/layout.module';
import { SharedModule } from '@shared/modules';
import { shared } from './shared';
import {SignUpService} from "./services";

@NgModule({
  declarations: [SignUpPageComponent],
  imports: [
    shared,
    SharedModule,
    CommonModule,
    LayoutModule,
    SignUpPageRoutingModule,
  ],
  providers: [SignUpService],
})
export class SignUpPageModule {}
