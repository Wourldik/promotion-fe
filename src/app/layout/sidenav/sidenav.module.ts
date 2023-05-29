import { NgModule } from '@angular/core';
import {SharedModule} from "@shared/modules";

import {SidenavComponent} from "./sidenav.component";
import {LogoutButtonModule} from "../buttons";
import {shared} from "./shared";


@NgModule({
  declarations: [SidenavComponent],
  imports: [shared, SharedModule, LogoutButtonModule],
  exports: [SidenavComponent]
})
export class SidenavModule { }
