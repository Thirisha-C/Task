import { Component } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent
{
  parentPrice = 100;
  message='';

  addToCart(msg: string)
  {
    console.log(msg);
    this.message = msg;
  }
}