import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  imports: [CommonModule],
  templateUrl: './observable-demo.html',
  styleUrl: './observable-demo.css',
})
export class ObservableDemo {
  data: any[] = [];

  //create observable
  myObservable = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => { observer.next(4) }, 1000);
    setTimeout(() => { observer.next(5) }, 2000);
    observer.next(6);
    setTimeout(() => { observer.complete() }, 3000);
  });

  //observer
  getData() {
    this.myObservable.subscribe({
      next: val => this.data.push(val),
      complete: () => console.log('Done')
    });
  }
}
