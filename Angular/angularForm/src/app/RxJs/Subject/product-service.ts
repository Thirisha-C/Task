import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = [
    { id: 1, name: 'Kurti', price: 600 },
    { id: 2, name: 'shoe', price: 1600 },
    { id: 3, name: 'jeans', price: 1000 },
  ];

  private cart: any[] = [];
  private mySub = new BehaviorSubject<any[]>([]);

  cart$ = this.mySub.asObservable();
  getProducts(){
    return this.products;
  }
  addToCart(product: any)
  {
    this.cart.push(product);
    this.mySub.next(this.cart);
  }
}
