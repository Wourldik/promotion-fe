import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CreateArticleFormComponent} from "./create-article-form.component";
import {SharedModule} from "@shared/modules";



@NgModule({
  declarations: [CreateArticleFormComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CreateArticleFormComponent]
})
export class CreateArticleFormModule { }
