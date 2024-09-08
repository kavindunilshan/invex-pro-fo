import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/home/home-box/navbar/navbar.component';
import { ActionButtonComponent } from './utils/action-button/action-button.component';
import { HomeComponent } from './components/home/home.component';
import { HomeBoxComponent } from './components/home/home-box/home-box.component';
import {NgOptimizedImage} from "@angular/common";
import { SideBarComponent } from './components/action-center/side-bar/side-bar.component';
import {MatIconModule} from "@angular/material/icon";
import { TopBarComponent } from './components/action-center/top-bar/top-bar.component';
import { ActionCenterComponent } from './components/action-center/action-center.component';
import { TableComponent } from './components/action-center/table/table.component';
import { SmallDataBoxComponent } from './components/action-center/small-data-box/small-data-box.component';
import { DashboardComponent } from './components/action-center/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActionButtonComponent,
    HomeComponent,
    HomeBoxComponent,
    SideBarComponent,
    TopBarComponent,
    ActionCenterComponent,
    TableComponent,
    SmallDataBoxComponent,
    DashboardComponent
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
