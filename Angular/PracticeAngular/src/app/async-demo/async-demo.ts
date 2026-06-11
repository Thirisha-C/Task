import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-async-demo',
  imports: [AsyncPipe],
  templateUrl: './async-demo.html',
  styleUrl: './async-demo.css',
})
export class AsyncDemo 
{
  userName$ = new BehaviorSubject('Thrisha');

  changeName()
  {
    this.userName$.next('Sri');
  }
}
