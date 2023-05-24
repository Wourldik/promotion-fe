import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordRecoveryPageRoutingModule } from './password-recovery-page-routing.module';
import { PasswordRecoveryPageComponent } from './password-recovery-page.component';
import { SharedModule } from '@shared/modules';
import { LayoutModule } from '@layout/layout.module';
import { shared } from './shared';
import {PasswordRecoveryService} from "./services/password-recovery.service";

@NgModule({
  declarations: [PasswordRecoveryPageComponent],
  imports: [
    shared,
    CommonModule,
    SharedModule,
    LayoutModule,
    PasswordRecoveryPageRoutingModule,
  ],
  providers: [PasswordRecoveryService]
})
export class PasswordRecoveryPageModule {}
