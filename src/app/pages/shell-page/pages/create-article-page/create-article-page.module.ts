import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateArticlePageRoutingModule } from './create-article-page-routing.module';
import {CreateArticlePageComponent} from "./create-article-page.component";
import {shared} from "./shared";


@NgModule({
  declarations: [CreateArticlePageComponent],
  imports: [shared, CommonModule, CreateArticlePageRoutingModule],
})
export class CreateArticlePageModule { }
