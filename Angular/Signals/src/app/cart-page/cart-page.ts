import { Component } from '@angular/core';
import { SignalService } from '../signal-service';

@Component({
  selector: 'app-cart-page',
  imports: [],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage 
{
  constructor(public cart: SignalService){}
}