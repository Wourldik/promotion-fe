import { NgModule } from '@angular/core';

import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import {DashboardPageComponent} from "./dashboard-page.component";
import {SharedModule} from "@shared/modules";
import {shared} from "./shared";


@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    shared,
    SharedModule,
    DashboardPageRoutingModule
  ]
})
export class DashboardPageModule { }
