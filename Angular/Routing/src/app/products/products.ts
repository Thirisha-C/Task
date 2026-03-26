import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Router } from '@angular/router';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products : any [] =[];
  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(){
    this.products = this.productService.getProducts();
  }
viewProduct(id:number)
{
  this.router.navigate(['/product', id]);
}
}


