import { NgModule } from '@angular/core';
import {SharedModule} from "@shared/modules";

import {SidenavComponent} from "./sidenav.component";


@NgModule({
  declarations: [SidenavComponent],
  imports: [
    SharedModule
  ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
