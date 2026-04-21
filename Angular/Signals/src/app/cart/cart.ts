import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart
{
  //base signals
  price = signal(100);
  quantity = signal(2);

  //computed
  total = computed(() => this.price() * this.quantity());
  
  increaseQty()
  {
    this.quantity.update(q => q+1);
  }
  decreaseQty()
  {
    this.quantity.update(q => q-1);
  }
  changePrice()
  {
    this.price.set(200);
  }
}