import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-unsubscribe-demo',
  imports: [],
  templateUrl: './unsubscribe-demo.html',
  styleUrl: './unsubscribe-demo.css',
})
export class UnsubscribeDemo implements OnInit, OnDestroy
{
  count = 0;
  sub!: Subscription;

  ngOnInit()
  {
    this.sub = interval(1000).subscribe(val => {
      this.count = val;
    });
  }
  start()
  {
console.log('start')  
}

  stop()
  {
    this,this.sub.unsubscribe();
    console.log('Stopped');
  }
  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }
}
