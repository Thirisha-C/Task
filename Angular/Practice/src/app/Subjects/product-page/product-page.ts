import { Component, OnInit } from '@angular/core';
import { AppService } from '../app-service';

@Component({
  selector: 'app-product-page',
  imports: [],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage implements OnInit
{
  product: any;

  constructor(private appService: AppService) {}

  ngOnInit()
  {
    this.product = this.appService.product;
  }
  
  addToCart()
  {
    this.appService.addToCart();
  }
}