import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TermsAndConditionsPageComponent } from './terms-and-conditions-page.component';

const routes: Routes = [
  {
    path: '',
    component: TermsAndConditionsPageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsAndConditionsPageRoutingModule {}
