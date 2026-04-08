import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-sub',
  imports: [],
  templateUrl: './behavior-sub.html',
  styleUrl: './behavior-sub.css',
})
export class BehaviorSub implements OnInit{

  behaviorSub =  new BehaviorSubject<number>(2020);

  ngOnInit() {

    console.log("Behavior starts");
     //Subscriber 1
  this.behaviorSub.subscribe((data) => {
    console.log("Subscriber 1: " + data)
  }); 

  //Subscriber 2
  this.behaviorSub.subscribe((data) => {
    console.log("Subscriber 2: " + data)
  }); 

  this.behaviorSub.next(2021);

  //Subscriber 3
  this.behaviorSub.subscribe((data) => {
    console.log("Subscriber 3: " + data)
  }); 
  }
  
}
