import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-sub',
  imports: [CommonModule],
  templateUrl: './async-sub.html',
  styleUrl: './async-sub.css',
})
export class AsyncSub implements OnInit {

  asyncSub = new AsyncSubject<number>(); 
  values: number[] = [];

  
  ngOnInit() {

    console.log("Async starts");
    //Subscriber 1
    this.asyncSub.subscribe((data) => {
      console.log("Subscriber 1: " + data);
      this.values.push(data);
    });

    //Subscriber 2
    this.asyncSub.subscribe((data) => {
      console.log("Subscriber 2: " + data);
    });

    this.asyncSub.next(2025);
    this.asyncSub.next(2026);
    this.asyncSub.next(2027);

    //Subscriber 3
    this.asyncSub.subscribe((data) => {
      console.log("Subscriber 3: " + data)
    });

    this.asyncSub.complete();
  }
}

