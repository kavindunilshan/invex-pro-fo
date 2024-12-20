import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BaseChartDirective} from 'ng2-charts';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/home/home-box/navbar/navbar.component';
import {ActionButtonComponent} from './utils/action-button/action-button.component';
import {HomeComponent} from './components/home/home.component';
import {HomeBoxComponent} from './components/home/home-box/home-box.component';
import {NgOptimizedImage} from "@angular/common";
import {SideBarComponent} from './components/action-center/general/side-bar/side-bar.component';
import {MatIconModule} from "@angular/material/icon";
import {TopBarComponent} from './components/action-center/general/top-bar/top-bar.component';
import {ActionCenterComponent} from './components/action-center/action-center.component';
import {TableComponent} from './components/action-center/general/table/table.component';
import {SmallDataBoxComponent} from './components/action-center/general/small-data-box/small-data-box.component';
import {
  DynamicFormDialogComponent
} from './components/action-center/general/dynamic-form-dialog/dynamic-form-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {ProductComponent} from './components/action-center/management/product/product.component';
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from '@angular/material/select'
import {
  HeaderWithButtonComponent
} from './components/action-center/general/header-with-button/header-with-button.component';
import {CategoryComponent} from './components/action-center/management/category/category.component';
import {CustomerComponent} from './components/action-center/management/customer/customer.component';
import {SupplierComponent} from './components/action-center/management/supplier/supplier.component';
import {NotificationComponent} from './components/action-center/menu/notification/notification.component';
import {ChartContainerComponent} from './components/action-center/general/chart-container/chart-container.component';
import {PieChartComponent} from './components/action-center/general/charts/pie-chart/pie-chart.component';
import {BarChartComponent} from './components/action-center/general/charts/bar-chart/bar-chart.component';
import {LineChartComponent} from './components/action-center/general/charts/line-chart/line-chart.component';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {SubTopicComponent} from './components/action-center/general/sub-topic/sub-topic.component';
import {OrdersComponent} from './components/action-center/transactions/orders/orders.component';
import {PurchaseComponent} from './components/action-center/transactions/purchase/purchase.component';
import {ReturnsComponent} from './components/action-center/transactions/returns/returns.component';
import {ShipmentsComponent} from './components/action-center/transactions/shipments/shipments.component';
import { AuthButtonComponent } from './utils/auth-button/auth-button.component';
import {AuthModule} from "@auth0/auth0-angular";
import { UserComponent } from './components/action-center/settings/user/user.component';
import { PreferenceComponent } from './components/action-center/settings/preference/preference.component';
import { SupportComponent } from './components/action-center/settings/support/support.component';
import {DashboardComponent} from "./components/action-center/menu/dashboard/dashboard.component";
import {
  DashboardHeadComponent
} from "./components/action-center/menu/dashboard/dashboard-head/dashboard-head.component";
import { StockFormComponent } from './components/action-center/general/stock-form/stock-form.component';
import { EmployeeComponent } from './components/action-center/management/employee/employee.component';

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
    HeaderWithButtonComponent,
    CategoryComponent,
    CustomerComponent,
    SupplierComponent,
    NotificationComponent,
    ChartContainerComponent,
    PieChartComponent,
    BarChartComponent,
    LineChartComponent,
    SubTopicComponent,
    OrdersComponent,
    PurchaseComponent,
    ReturnsComponent,
    ShipmentsComponent,
    AuthButtonComponent,
    UserComponent,
    PreferenceComponent,
    SupportComponent,
    StockFormComponent,
    EmployeeComponent,
  ],
    imports: [
        MatIconModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgOptimizedImage,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        BaseChartDirective,
        MatSelectModule,
        MatDatepickerModule,
      MatNativeDateModule,
      AuthModule.forRoot({
        domain: 'dev-c5ls7veng3ljfc5g.us.auth0.com',
        clientId: 'BrXpQ8T5kbczgBXZDujxeuMfeBnuiQeg',
        authorizationParams: {
          redirect_uri: window.location.origin+"/action-center",
        },
      }),
    ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
