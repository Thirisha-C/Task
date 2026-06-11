import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService 
{
  loginStatus$ = new Subject<boolean>();
  cartCount$ = new Subject<number>();
  private count = 0;

  product = {
    id: 1,
    name: 'Perfume',
    price: 1500
  };

  login()
  {
    this.loginStatus$.next(true);
  }

  logout()
  {
    this.loginStatus$.next(false);
  }

  addToCart()
  {
    this.count++;
    this.cartCount$.next(this.count);
  }
}