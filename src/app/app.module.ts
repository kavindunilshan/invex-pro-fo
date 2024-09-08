import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/home/home-box/navbar/navbar.component';
import { ActionButtonComponent } from './utils/action-button/action-button.component';
import { HomeComponent } from './components/home/home.component';
import { HomeBoxComponent } from './components/home/home-box/home-box.component';
import { NgOptimizedImage } from "@angular/common";
import { SideBarComponent } from './components/action-center/general/side-bar/side-bar.component';
import { MatIconModule } from "@angular/material/icon";
import { TopBarComponent } from './components/action-center/general/top-bar/top-bar.component';
import { ActionCenterComponent } from './components/action-center/action-center.component';
import { TableComponent } from './components/action-center/general/table/table.component';
import { SmallDataBoxComponent } from './components/action-center/general/small-data-box/small-data-box.component';
import { DashboardComponent } from './components/action-center/dashboard/dashboard.component';
import { DashboardHeadComponent } from './components/action-center/dashboard/dashboard-head/dashboard-head.component';
import { DynamicFormDialogComponent } from './components/action-center/general/dynamic-form-dialog/dynamic-form-dialog.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ProductComponent } from './components/action-center/management/product/product.component';

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
    DashboardComponent,
    DashboardHeadComponent,
    DynamicFormDialogComponent,
    ProductComponent,
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,  // Required for Angular Material
    AppRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
