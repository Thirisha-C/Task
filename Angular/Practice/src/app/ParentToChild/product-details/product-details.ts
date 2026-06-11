import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails 
{
  @Input() product: any;
  @Output() addToCart = new EventEmitter<any>();

  add()
  {
    this.addToCart.emit(this.product);
  }
}