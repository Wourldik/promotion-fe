import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PasswordRecoveryPageComponent } from './password-recovery-page.component';

const routes: Routes = [
  {
    path: '',
    component: PasswordRecoveryPageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordRecoveryPageRoutingModule {}
