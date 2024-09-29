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
import {OrdersComponent} from "./components/action-center/transactions/orders/orders.component";
import {PurchaseComponent} from "./components/action-center/transactions/purchase/purchase.component";
import {ShipmentsComponent} from "./components/action-center/transactions/shipments/shipments.component";
import {ReturnsComponent} from "./components/action-center/transactions/returns/returns.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'action-center', component: ActionCenterComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'notifications', component: NotificationComponent },

      { path: 'products', component: ProductComponent },
      { path: 'categories', component: CategoryComponent },
      { path: 'customers', component: CustomerComponent },
      { path: 'suppliers', component: SupplierComponent},

      { path: 'orders', component: OrdersComponent },
      { path: 'purchases', component: PurchaseComponent },
      { path: 'returns', component: ReturnsComponent },
      { path: 'shipments', component: ShipmentsComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
