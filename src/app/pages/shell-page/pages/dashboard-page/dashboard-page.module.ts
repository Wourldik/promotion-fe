import { NgModule } from '@angular/core';

import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import {DashboardPageComponent} from "./dashboard-page.component";
import {SharedModule} from "@shared/modules";


@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    SharedModule,
    DashboardPageRoutingModule
  ]
})
export class DashboardPageModule { }
