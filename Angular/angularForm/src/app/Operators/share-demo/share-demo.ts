import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, share } from 'rxjs';

@Component({
  selector: 'app-share-demo',
  imports: [],
  templateUrl: './share-demo.html',
  styleUrl: './share-demo.css',
})
export class ShareDemo implements OnInit
 {
  users$!: Observable<any>;
  constructor(private http: HttpClient) {}
  ngOnInit() 
  {
    this.users$ = this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        share()
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
    }, 5000);
    console.log('Share');
  }
}
