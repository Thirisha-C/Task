import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from '../app-service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy
{
  isLoggedIn!:boolean ;
  cartCount = 0;

  login!: Subscription;
  cart!: Subscription;

  constructor(private appService: AppService) {}

  ngOnInit()
  {
    //login status
    this.login = this.appService.loginStatus$.subscribe(
      status => {
        this.isLoggedIn = status;
      }
    );

    //cartcount
    this.cart = this.appService.cartCount$.subscribe(
      count => {
        this.cartCount = count;
      }
    );
  }

  ngOnDestroy()
  {
    this.login.unsubscribe();
    this.cart.unsubscribe();
  }
}