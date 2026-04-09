import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-debounce-demo',
  imports: [CommonModule],
  templateUrl: './debounce-demo.html',
  styleUrl: './debounce-demo.css',
})
export class DebounceDemo {

  input$ = new Subject<string>();
  lastValue: string = '';

  constructor() {
    this.input$
      .pipe(
        debounceTime(500)
      )
      .subscribe(val => {
        console.log('Debounced value:', val);
        this.lastValue = val;
      });
  }
  onType(event: any) {
    this.input$.next(event.target.value);
  }
}
