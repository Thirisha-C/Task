import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-share-replay-demo',
  imports: [],
  templateUrl: './share-replay-demo.html',
  styleUrl: './share-replay-demo.css',
})
export class ShareReplayDemo implements OnInit
{
  users$!: Observable<any>;
  constructor(private http: HttpClient) {}
  ngOnInit() 
  {
    this.users$ = this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        shareReplay(1)
      );
    this.users$.subscribe(res => {
      console.log('Sub1:', res);
    });
    this.users$.subscribe(res => {
      console.log('Sub2:', res);
    });
    setTimeout(() => {
      this.users$.subscribe(res => {
        console.log('Sub3:', res);
      })
    }, 4000);

    console.log('ShareReplay');
  }
}
