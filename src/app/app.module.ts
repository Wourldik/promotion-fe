import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Firebase
import { environment } from '../environments/environment';
import {
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from '@layout/form-controls/search-input/search.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { ShellPageComponent } from './pages/shell-page/shell-page.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {ToolbarModule} from "@layout/toolbar";
import {SidenavModule} from "@layout/sidenav";
import {shared} from "./pages/shell-page/shared";

@NgModule({
  declarations: [AppComponent, ShellPageComponent],
  imports: [
    shared,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SearchModule,
    AngularFireModule.initializeApp(environment.firebase), // Initialize Firebase
    AngularFireAuthModule, // Import the authentication module
    AngularFireDatabaseModule, // Import the database module
    AngularFireStorageModule,
    ToolbarModule,
    SidenavModule,
  ],
  bootstrap: [AppComponent],
  providers: [ScreenTrackingService, UserTrackingService],
})
export class AppModule {}
