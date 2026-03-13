import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-button',
  imports: [],
  templateUrl: './add-to-cart-button.html',
  styleUrl: './add-to-cart-button.css',
})
export class AddToCartButton {
@Input() product: any;
@Output() cartEvent = new EventEmitter();
addToCart()
{
  this.cartEvent.emit(this.product);
}
}

// EventEmitter - event or data send panna will use 