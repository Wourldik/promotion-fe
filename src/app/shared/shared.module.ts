import { NgModule } from '@angular/core';

import { common } from './common';
import { directives } from './directives';
import { material } from './material';

const modules = [common, material];

@NgModule({
  imports: [modules],
  declarations: [directives],
  exports: [modules, directives],
})
export class SharedModule {}
