import {Component, Input, OnInit} from '@angular/core';

import {ArticlePreview} from "@shared/models";

@Component({
  selector: 'pr-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
})
export class DashboardCardComponent implements OnInit {
  @Input()
  article: ArticlePreview;

  constructor() { }

  ngOnInit(): void {
  }

}
