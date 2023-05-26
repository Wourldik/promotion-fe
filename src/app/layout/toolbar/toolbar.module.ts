import { NgModule } from '@angular/core';

import {ToolbarComponent} from "./toolbar.component";
import {SharedModule} from "@shared/modules";


@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    SharedModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
