import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgForOf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-products',
  imports: [NgForOf, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  constructor(private router: Router){}
  products = [
    {id: 1, name: 'Perfume'},
    {id: 2, name: 'Watch'}
  ];
  addToCart(product: any){
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
  }

}
