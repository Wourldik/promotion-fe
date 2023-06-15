import { NgModule } from '@angular/core';

import { DashboardFiltersComponent} from "./dashboard-filters.component";
import { SharedModule} from "@shared/modules";



@NgModule({
  declarations: [DashboardFiltersComponent],
  imports: [
    SharedModule
  ],
  exports: [DashboardFiltersComponent]
})
export class DashboardFiltersModule { }
