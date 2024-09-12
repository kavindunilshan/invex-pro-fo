import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ActionCenterComponent} from "./components/action-center/action-center.component";
import {DashboardComponent} from "./components/action-center/dashboard/dashboard.component";
import {ProductComponent} from "./components/action-center/management/product/product.component";
import {CategoryComponent} from "./components/action-center/management/category/category.component";
import {CustomerComponent} from "./components/action-center/management/customer/customer.component";
import {SupplierComponent} from "./components/action-center/management/supplier/supplier.component";
import {NotificationComponent} from "./components/action-center/menu/notification/notification.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'action-center', component: ActionCenterComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductComponent },
      { path: 'categories', component: CategoryComponent },
      { path: 'customers', component: CustomerComponent },
      { path: 'suppliers', component: SupplierComponent},

      { path: 'notifications', component: NotificationComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
