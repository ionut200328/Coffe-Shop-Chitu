import { Injectable } from '@angular/core';
import { CoffeeInterface } from './coffee.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  coffees: CoffeeInterface[] = [
    {
      title: 'Americano',
      description: 'A shot or two of espresso with hot water added',
      image: 'assets/americano.jpg',
      price: 2.45
    },
    {
      title: 'Cappuccino',
      description: 'Espresso with a little bit of steamed milk and a lot of milk foam',
      image: 'assets/cappuccino.jpg',
      price: 3.50
    },
    {
      title: 'Espresso',
      description: 'Finely ground coffee beans, hot water, and high pressure',
      image: 'assets/espresso.jpg',
      price: 1.90
    },
    {
      title: 'Latte',
      description: 'Espresso with steamed milk and a light layer of milk foam',
      image: 'assets/latte.jpg',
      price: 3.00
    },
    {
      title: 'Mocha',
      description: 'Espresso with steamed milk, chocolate syrup, and whipped cream',
      image: 'assets/mocha.jpg',
      price: 4.50
    },
    {
      title: 'Americano',
      description: 'A shot or two of espresso with hot water added',
      image: 'assets/americano.jpg',
      price: 2.45
    },
    {
      title: 'Cappuccino',
      description: 'Espresso with a little bit of steamed milk and a lot of milk foam',
      image: 'assets/cappuccino.jpg',
      price: 3.50
    },
    {
      title: 'Espresso',
      description: 'Finely ground coffee beans, hot water, and high pressure',
      image: 'assets/espresso.jpg',
      price: 1.90
    },
    {
      title: 'Latte',
      description: 'Espresso with steamed milk and a light layer of milk foam',
      image: 'assets/latte.jpg',
      price: 3.00
    },
    {
      title: 'Mocha',
      description: 'Espresso with steamed milk, chocolate syrup, and whipped cream',
      image: 'assets/mocha.jpg',
      price: 4.50
    }
  ];

  constructor() { }

  private coffeeSubject: Subject<CoffeeInterface> = new Subject<CoffeeInterface>();
  coffeeSubject$ = this.coffeeSubject.asObservable();

  orderCoffee(coffee: CoffeeInterface) {
    this.coffeeSubject.next(coffee);
  }

  searchCoffees(searchTerm: string): CoffeeInterface[] {
    let results: CoffeeInterface[] = this.coffees.filter((coffee: CoffeeInterface) => {
      return coffee.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    );
    console.log(results);
    return results;
  }
}
