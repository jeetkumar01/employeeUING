import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:"full"
  },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'details/:id', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) },
  { path: 'employee', loadChildren: () => import('./add-employee/add-employee.module').then(m => m.AddEmployeeModule) }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
