import { NgModule } from '@angular/core';

import {DashboardCardComponent} from "./dashboard-card.component";
import {SharedModule} from "@shared/modules";



@NgModule({
  declarations: [DashboardCardComponent],
  imports: [
    SharedModule
  ],
  exports: [DashboardCardComponent]
})
export class DashboardCardModule { }
