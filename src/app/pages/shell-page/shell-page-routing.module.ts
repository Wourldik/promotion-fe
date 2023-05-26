import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ShellPageComponent} from "./shell-page.component";

const routes: Routes = [
  {
    path: '',
    component: ShellPageComponent,
    runGuardsAndResolvers: 'always',
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellPageRoutingModule {}
