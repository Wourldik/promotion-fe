import { NgModule } from '@angular/core';

import {WeatherWidgetComponent} from "./weather-widget.component";
import {SharedModule} from "@shared/modules";



@NgModule({
  declarations: [WeatherWidgetComponent],
  imports: [
    SharedModule
  ],
  exports: [WeatherWidgetComponent]
})
export class WeatherWidgetModule { }
