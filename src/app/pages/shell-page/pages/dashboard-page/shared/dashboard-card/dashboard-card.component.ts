import {Component, EventEmitter, Input, Output} from '@angular/core';

import {ArticlePreview} from "@shared/models";

@Component({
  selector: 'pr-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
})
export class DashboardCardComponent {
  @Input()
  article: ArticlePreview;

  @Output()
  readonly articleDeleted = new EventEmitter<string>();

  @Output()
  readonly articleEdited = new EventEmitter<string>();

  onEdit(id: any): void {
    this.articleEdited.emit(id);
  }

  onDelete(id: any): void {
    this.articleDeleted.emit(id);
  }

}
