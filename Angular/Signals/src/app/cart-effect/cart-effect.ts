import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-cart-effect',
  imports: [],
  templateUrl: './cart-effect.html',
  styleUrl: './cart-effect.css',
})
export class CartEffect 
{
  price = signal(100);
  quantity = signal(1);

  total = () => this.price() * this.quantity();

  constructor() 
  {
    effect(() => 
      {
      console.log('Quantity changed:', this.quantity());
      console.log('Total is:', this.total());
    });
  }

  increaseQty() 
  {
    this.quantity.update(q => q + 1);
  }

  decreaseQty() 
  {
    this.quantity.update(q => q - 1);
  }
}