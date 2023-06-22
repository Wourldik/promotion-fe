import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellPageRoutingModule } from './shell-page-routing.module';
import {shared} from "./shared";

@NgModule({
  imports: [
    shared,
    CommonModule,
    ShellPageRoutingModule],
})
export class ShellPageModule {}
