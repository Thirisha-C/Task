import { Component, effect } from '@angular/core';
import { SignalService } from '../signal-service';
import { ProductPage } from '../product-page/product-page';

@Component({
  selector: 'app-home',
  imports: [ProductPage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home
{
  constructor(public cart: SignalService) {
    effect(() => {
      console.log('Cart Items:', this.cart.items());
    });
  }
  addCart()
  {
    this.cart.addItem();
  }
}