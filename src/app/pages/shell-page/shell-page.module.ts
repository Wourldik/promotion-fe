import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellPageRoutingModule } from './shell-page-routing.module';
import {shared} from "./shared";
import {SharedModule} from "@shared/modules";

@NgModule({
  imports: [
    shared,
    SharedModule,
    ShellPageRoutingModule],
})
export class ShellPageModule {}
