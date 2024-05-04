import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CoffeeCardComponent } from './coffee-card/coffee-card.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DessertCardComponent } from './dessert-card/dessert-card.component';
import { SharedModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    DashboardComponent,
    CoffeeCardComponent,
    DessertCardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DashboardModule { }
