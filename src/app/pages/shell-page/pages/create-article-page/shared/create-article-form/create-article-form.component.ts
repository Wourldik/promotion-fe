import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

import {FormService} from "./services";
import {IArticleFormValue} from "./interfaces";
import {FormControl} from "./enums";

@Component({
  selector: 'pr-create-article-form',
  templateUrl: './create-article-form.component.html',
  styleUrls: ['./create-article-form.component.scss'],
  viewProviders: [FormService],
})
export class CreateArticleFormComponent implements OnInit {
  readonly create = new EventEmitter<IArticleFormValue>();

  get form(): FormGroup {
    return this.formService.form;
  }

  get valid(): boolean {
    return this.formService.valid;
  }

  readonly formControl = FormControl;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.formService.buildForm();
  }

  onCreate(): void {
    this.create.emit(this.formService.value);
  }
}
