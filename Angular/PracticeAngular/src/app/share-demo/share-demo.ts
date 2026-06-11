import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { shareReplay } from 'rxjs';

@Component({
  selector: 'app-share-demo',
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './share-demo.html',
  styleUrl: './share-demo.css',
})
export class ShareDemo implements OnInit
{
  user$: any;
  constructor(private http: HttpClient) {}  
    ngOnInit()
    {
      this.user$ = this.http.get('https://jsonplaceholder.typicode.com/users')
    .pipe(
      shareReplay(1)
    );
     // Subscriber 1
    this.user$.subscribe((data: any) => {
      console.log('Subscriber 1', data);
    });

    // Subscriber 2
    this.user$.subscribe((data: any) => {
      console.log('Subscriber 2', data);
    });
    }  
}