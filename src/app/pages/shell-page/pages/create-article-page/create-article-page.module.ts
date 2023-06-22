import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateArticlePageRoutingModule } from './create-article-page-routing.module';
import {CreateArticlePageComponent} from "./create-article-page.component";


@NgModule({
  declarations: [CreateArticlePageComponent],
  imports: [
    CommonModule,
    CreateArticlePageRoutingModule
  ]
})
export class CreateArticlePageModule { }
