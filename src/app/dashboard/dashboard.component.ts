import { Component, OnInit } from '@angular/core';
import { CoffeeInterface } from '../services/coffee.interface';
import { CoffeeService } from '../services/coffee.service';
import { DessertInterface } from '../services/dessert.interface';
import { DessertService } from '../services/dessert.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ItemsInterface } from '../services/items.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  coffees: CoffeeInterface[] = [];
  desserts: DessertInterface[] = [];
  orderedItems: ItemsInterface|null = null;
  searchTerm: FormControl = new FormControl('');

  visibleCoffees: CoffeeInterface[] = [];
  currentIndex = 0;

  visibleDesserts: DessertInterface[] = [];
  dessertIndex = 0;

  constructor(private coffeeService: CoffeeService, private dessertService: DessertService) { 
    this.searchTerm.valueChanges.pipe(debounceTime(300)).subscribe(searchTerm => {
      this.coffees = this.coffeeService.searchCoffees(searchTerm);
      this.desserts = this.dessertService.searchDesserts(searchTerm);
    });
    this.coffeeService.coffeeSubject$.subscribe((coffee: CoffeeInterface) => {
      console.log(coffee);
      this.orderedItems = coffee;
    });
    this.dessertService.dessertSubject$.subscribe((dessert: DessertInterface) => {
      console.log(dessert);
      this.orderedItems = dessert;
    });
  }

  ngOnInit(): void {
    this.coffees = this.coffeeService.coffees;
    this.desserts = this.dessertService.desserts;
    this.updateVisibleCoffees();
    this.updateVisibleDesserts();
    console.log(this.coffees);
  }

  updateVisibleCoffees() {
    this.visibleCoffees = this.coffees.slice(this.currentIndex, this.currentIndex + 5);
  }

  updateVisibleDesserts() {
    this.visibleDesserts = this.desserts.slice(this.dessertIndex, this.dessertIndex + 5);
  }

  orderCoffee($event: CoffeeInterface) {
    this.coffeeService.orderCoffee($event);
  }

  orderDessert($event: DessertInterface) {
    this.dessertService.orderDessert($event);
  }


  search() {
    console.log(this.searchTerm);
    this.coffees = this.coffeeService.searchCoffees(this.searchTerm.value);
    this.desserts = this.dessertService.searchDesserts(this.searchTerm.value);
  }

  scrollLeftC() {
    const viewport = document.querySelector('.viewportC');
    if (viewport) {
      viewport.scrollBy({ left: -260, behavior: 'smooth' });
    }
  }

  scrollRightC() {
    const viewport = document.querySelector('.viewportC');
    if (viewport) {
      viewport.scrollBy({ left: 260, behavior: 'smooth' });
    }
  }

  scrollLeftD() {
    const viewport = document.querySelector('.viewportD');
    if (viewport) {
      viewport.scrollBy({ left: -260, behavior: 'smooth' });
    }
  }

  scrollRightD() {
    const viewport = document.querySelector('.viewportD');
    if (viewport) {
      viewport.scrollBy({ left: 260, behavior: 'smooth' });
    }
  }

}
