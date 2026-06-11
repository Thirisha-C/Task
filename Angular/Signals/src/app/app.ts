import { Component, signal } from '@angular/core';
import { Counter } from './counter/counter';
import { Cart } from './computed/cart/cart';
import { CartEffect } from './cart-effect/cart-effect';
import { Parent } from './InputOutput/parent/parent';
import { Home } from './Signals/home/home';
import { CartPage } from './Signals/cart-page/cart-page';

@Component({
  selector: 'app-root',
  imports: [Counter, Cart, CartEffect, Parent, Home, CartPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Signals');
}
