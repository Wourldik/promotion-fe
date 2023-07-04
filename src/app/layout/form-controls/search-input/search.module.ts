import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/modules';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [SharedModule],
  exports: [SearchComponent],
})
export class SearchModule {}
