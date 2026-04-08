import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-page',
  imports: [CommonModule],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage implements OnInit{
  
  cart: any[] =[];
  constructor(private service: ProductService) {}

  ngOnInit() {
    this.service.cart$.subscribe(data => {
      this.cart = data;
    });
  }
}
