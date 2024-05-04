import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DessertInterface } from 'src/app/services/dessert.interface';
import { DessertService } from 'src/app/services/dessert.service';

@Component({
  selector: 'app-dessert-card',
  templateUrl: './dessert-card.component.html',
  styleUrls: ['./dessert-card.component.scss']
})
export class DessertCardComponent {
  @Input({required: true}) dessert!: DessertInterface
  @Output() orderCoffee = new EventEmitter<DessertInterface>();

  constructor(private router: Router, private dessertService: DessertService) { }

  navigateToCoffeePage() {
    console.log("Navigating to coffee page");
    this.router.navigateByUrl('/coffee-page');
  }
  order() {
    this.dessertService.orderDessert(this.dessert);
  }
}
