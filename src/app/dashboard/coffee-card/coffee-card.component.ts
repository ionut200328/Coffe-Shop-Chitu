import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CoffeeInterface } from 'src/app/services/coffee.interface';
import { CoffeeService } from 'src/app/services/coffee.service';


@Component({
  selector: 'app-coffee-card',
  templateUrl: './coffee-card.component.html',
  styleUrls: ['./coffee-card.component.scss']
})
export class CoffeeCardComponent {

  @Input({required: true}) coffee!: CoffeeInterface;
  @Output() orderCoffee = new EventEmitter<CoffeeInterface>();

  constructor(private router: Router, private coffeeService: CoffeeService) { }

  navigateToCoffeePage() {
    console.log("Navigating to coffee page");
    this.router.navigateByUrl('/coffee-page');
  }
  order() {
    this.coffeeService.orderCoffee(this.coffee);
  }
}
