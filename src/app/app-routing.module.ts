import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ActionCenterComponent} from "./components/action-center/action-center.component";
import {DashboardComponent} from "./components/action-center/dashboard/dashboard.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'action-center', component: ActionCenterComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
