import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PhotoUploadComponent} from "./photo-upload.component";
import {SharedModule} from "@shared/modules";


@NgModule({
  declarations: [PhotoUploadComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [PhotoUploadComponent]
})
export class PhotoUploadModule { }
