import {FormControl} from "../enums";

export interface IArticleFormValue {
  [FormControl.TITLE]: string;
  [FormControl.TEXT]: string;
  [FormControl.PHOTO]: string;
}
