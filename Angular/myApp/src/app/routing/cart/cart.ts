import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})

export class Cart implements OnInit {
  cart: any[] = [];
  ngOnInit() 
  {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }
  clearCart() 
  {
    localStorage.removeItem('cart');
    this.cart = [];
  }
}