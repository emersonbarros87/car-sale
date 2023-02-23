import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './car-sale/car-sale-login/components/login/login.component';
import { AuthenticationGuard } from './car-sale/car-sale-login/config/guards/authentication.guards';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthenticationGuard],
    loadChildren: () => import('./car-sale/car-sale-dashboard/car-sale-dashboard.module').then(m => m.CarSaleDashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
