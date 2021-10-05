import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { StyleGuidePageComponent } from './style-guide-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StyleGuidePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StyleGuidePageRoutingModule {}
