import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService 
{
  products = [
    { id: 1, name: 'Laptop', price: 80000 },
    { id: 2, name: 'Watch', price: 75000 },
    { id: 3, name: 'Perfume', price: 60000 },
    { id: 4, name: 'Shoe', price: 20000 },
    { id: 5, name: 'mobile', price: 50000 }
  ];

  cart: any[] = [];

  getProducts()
  {
    return this.products;
  }
}