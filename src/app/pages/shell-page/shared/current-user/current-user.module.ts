import { NgModule } from '@angular/core';

import {CurrentUserComponent} from "./current-user.component";
import {SharedModule} from "@shared/modules";



@NgModule({
  declarations: [CurrentUserComponent],
  imports: [
    SharedModule
  ],
  exports: [CurrentUserComponent],
})
export class CurrentUserModule { }
