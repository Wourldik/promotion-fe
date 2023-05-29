import { NgModule } from '@angular/core';

import {SharedModule} from "@shared/modules";
import {SidenavListComponent} from "./sidenav-list.component";

@NgModule({
  declarations: [SidenavListComponent],
  imports: [
    SharedModule
  ],
  exports: [SidenavListComponent]
})
export class SidenavListModule { }
