import { Component } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-service',
  imports: [CommonModule],
  templateUrl: './product-service.html',
  styleUrl: './product-service.css',
})
export class ProductService {
  products: any;
   constructor(private Product: Product){}
   ngOnInit()
   {
    this.products = this.Product.getProducts();
   }
}
