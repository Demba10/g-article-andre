import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { LoginComponent } from './layouts/login/login.component';
import { AccueilComponent } from './layouts/accueil/accueil.component';

const routes: Routes = [
  {
    path: 'sign-out', component: AuthComponent
  },
  {
    path: 'sign-in', component: LoginComponent
  },
  {
    path: 'accueil', component: AccueilComponent
  },
  {
    path: '', redirectTo: 'accueil', pathMatch: 'full'
  },
  {
    path: 'dashboard', loadChildren: () => import('./component/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
