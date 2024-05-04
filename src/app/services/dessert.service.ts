import { Injectable } from '@angular/core';
import { DessertInterface } from './dessert.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DessertService {

  desserts: DessertInterface[] = [
    {
      title: 'Caramel Cafe',
      description: 'Espresso with steamed milk, caramel syrup, and whipped cream',
      image: 'assets/caramel-cake.jpg',
      price: 4.50
    },
    {
      title: 'Cupcake',
      description: 'A small cake designed to serve one person',
      image: 'assets/cupcake.jpg',
      price: 2.00
    },
    {
      title: 'Chocolate Cake',
      description: 'A rich, moist cake with a chocolate flavor',
      image: 'assets/chocolate-cake.jpg',
      price: 3.50
    },
    {
      title: 'Cheesecake',
      description: 'A sweet dessert consisting of one or more layers',
      image: 'assets/cheesecake.jpg',
      price: 4.00
    }
  ];

  constructor() { }

  private dessertSubject: Subject<DessertInterface> = new Subject<DessertInterface>();
  dessertSubject$ = this.dessertSubject.asObservable();

  orderDessert(dessert: DessertInterface) {
    this.dessertSubject.next(dessert);
  }

  searchDesserts(searchTerm: string): DessertInterface[] {
    let results: DessertInterface[] = this.desserts.filter((dessert: DessertInterface) => {
      return dessert.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    );
    console.log(results);
    return results;
  }
}
