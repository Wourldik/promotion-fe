import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

import {DashboardService} from "./services";
import {ArticlePreview} from "@shared/models";

@Component({
  selector: 'pr-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  articles$: Observable<ArticlePreview[] | null> | undefined;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  private getArticles(): void {
    this.articles$ = this.dashboardService.getArticles();
  };

}
