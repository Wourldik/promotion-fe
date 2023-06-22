import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CreateArticlePageComponent} from "./create-article-page.component";

const routes: Routes = [{
  path: '',
  component: CreateArticlePageComponent,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateArticlePageRoutingModule { }
