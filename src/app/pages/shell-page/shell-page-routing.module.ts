import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ShellPageComponent} from "./shell-page.component";

const routes: Routes = [
  {
    path: '',
    component: ShellPageComponent,
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard-page/dashboard-page.module').then(
            m => m.DashboardPageModule
          ),
      },
      {
        path: 'create-article',
        loadChildren: () =>
          import('./pages/create-article-page/create-article-page.module').then(
            m => m.CreateArticlePageModule
          ),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellPageRoutingModule {}
