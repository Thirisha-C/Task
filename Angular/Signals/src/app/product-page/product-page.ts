import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage 
{
  price = input<number>();
  add = output<void>();

  buy()
  {
    this.add.emit();
  }
}