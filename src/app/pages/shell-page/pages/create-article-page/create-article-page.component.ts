import { Component, OnInit } from '@angular/core';

import {IArticleFormValue} from "./shared/create-article-form";
import {CreateArticleService} from "./services";

@Component({
  selector: 'pr-create-article-page',
  templateUrl: './create-article-page.component.html',
  styleUrls: ['./create-article-page.component.scss']
})
export class CreateArticlePageComponent implements OnInit {

  constructor(private articleService: CreateArticleService) { }

  ngOnInit(): void {
  }

  onCreate(article: IArticleFormValue) {
    // @ts-ignore
    this.articleService.addArticle(article);
  }
}
