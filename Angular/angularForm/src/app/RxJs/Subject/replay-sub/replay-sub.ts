import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-sub',
  imports: [CommonModule],
  templateUrl: './replay-sub.html',
  styleUrl: './replay-sub.css',
})
export class ReplaySub implements OnInit {

  replaySub = new ReplaySubject<number>(2); //last 2 values will be store
  values: number[] = [];

  ngOnInit() {

    console.log("Replay starts");
    //Subscriber 1
    this.replaySub.subscribe((data) => {
      console.log("Subscriber 1: " + data);
      this.values.push(data);
    });

    //Subscriber 2
    this.replaySub.subscribe((data) => {
      console.log("Subscriber 2: " + data);
    });

    this.replaySub.next(2023);
    this.replaySub.next(2024);

    //Subscriber 3
    this.replaySub.subscribe((data) => {
      console.log("Subscriber 3: " + data)
    });
  }
}
