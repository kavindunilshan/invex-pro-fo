import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/home/home-box/navbar/navbar.component';
import { ActionButtonComponent } from './utils/action-button/action-button.component';
import { HomeComponent } from './components/home/home.component';
import { HomeBoxComponent } from './components/home/home-box/home-box.component';
import {NgOptimizedImage} from "@angular/common";
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActionButtonComponent,
    HomeComponent,
    HomeBoxComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
