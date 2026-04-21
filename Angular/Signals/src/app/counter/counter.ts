import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter 
{
  //signal create
  count = signal(0);

  increase()
  {
    this.count.update(val => val +1);
  }
  
  decrease()
  {
    this.count.update(val => val -1);
  }
 
  reset()
  {
    this.count.set(0);
  }
}