import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationbarComponent } from '../navigationbar/navigationbar.component';
import { CartComponent } from '../dashboard/cart/cart.component';

@NgModule({
  declarations: [NavigationbarComponent, CartComponent],
  imports: [CommonModule],
  exports: [NavigationbarComponent, CartComponent]
})
export class SharedModule { }