import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CreateArticleFormComponent} from "./create-article-form.component";
import {SharedModule} from "@shared/modules";
import {shared} from "./shared";


@NgModule({
  declarations: [CreateArticleFormComponent],
  imports: [
    shared,
    CommonModule,
    SharedModule
  ],
  exports: [CreateArticleFormComponent]
})
export class CreateArticleFormModule { }
