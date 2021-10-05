import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/modules';

import { StyleGuidePageComponent } from './style-guide-page.component';
import { StyleGuidePageRoutingModule } from './style-guide-page-routing.module';

@NgModule({
  declarations: [StyleGuidePageComponent],
  imports: [SharedModule, StyleGuidePageRoutingModule],
  exports: [StyleGuidePageComponent],
})
export class StyleGuidePageModule {}
