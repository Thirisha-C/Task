import { Component, signal } from '@angular/core';
import { Counter } from './counter/counter';
import { Cart } from './cart/cart';
import { CartEffect } from './cart-effect/cart-effect';
import { Parent } from './parent/parent';
import { Child } from './child/child';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [Counter, Cart, CartEffect, Parent, Child, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Signals');
}
