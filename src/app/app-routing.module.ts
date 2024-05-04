import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeePageComponent } from './dashboard/coffee-page/coffee-page.component';

const routes: Routes = [{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
                        { path: 'coffee-page', component: CoffeePageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
