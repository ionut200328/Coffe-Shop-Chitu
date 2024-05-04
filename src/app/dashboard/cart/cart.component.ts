import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { CoffeeInterface } from 'src/app/services/coffee.interface';
import { CoffeeService } from 'src/app/services/coffee.service';
import { DessertInterface } from 'src/app/services/dessert.interface';
import { DessertService } from 'src/app/services/dessert.service';
import { ItemsInterface } from 'src/app/services/items.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  orderedItems: ItemsInterface[] = [];
  showCart = false;

  constructor(private coffeeService: CoffeeService, private dessertService: DessertService, private eRef: ElementRef) { 
    this.coffeeService.coffeeSubject$.subscribe((coffee: CoffeeInterface) => {
      this.orderedItems.push(coffee);
      localStorage.setItem('orderedItems', JSON.stringify(this.orderedItems));
    });
    this.dessertService.dessertSubject$.subscribe((dessert: DessertInterface) => {
      this.orderedItems.push(dessert);
      localStorage.setItem('orderedItems', JSON.stringify(this.orderedItems));
    });
  }

  ngOnInit(): void {
    this.orderedItems = JSON.parse(localStorage.getItem('orderedItems') || '[]');
  }

  getTotalPrice() {
    console.log("Calculating total price", this.orderedItems, this.orderedItems.reduce((acc, coffee) => acc + coffee.price, 0));
    return this.orderedItems.reduce((acc, coffee) => acc + coffee.price, 0);
  }

  removeItem(index: number) {
    this.orderedItems.splice(index, 1);
    localStorage.setItem('orderedItems', JSON.stringify(this.orderedItems));
  }

  clearCart() {
    this.orderedItems = [];
    localStorage.setItem('orderedItems', JSON.stringify(this.orderedItems));
  }

  order() {
    this.orderedItems = [];
    localStorage.setItem('orderedItems', JSON.stringify(this.orderedItems));
  }

  toggleCart() {
    this.showCart = !this.showCart;
    console.log("Toggling cart visibility", this.orderedItems);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.eRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.showCart = false;
    }
  }

  @HostListener('document:keydown.escape')
  onKeydownHandler() {
    this.showCart = false;
  }
}
