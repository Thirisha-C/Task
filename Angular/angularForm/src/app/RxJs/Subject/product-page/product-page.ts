import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-page',
  imports: [CommonModule],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage implements OnInit{
  products: any[] = [];
  constructor(private service: ProductService) {}
  
  ngOnInit() {
    this.products = this.service.getProducts();
  }

  add(p: any){
    this.service.addToCart(p);
  }
}
