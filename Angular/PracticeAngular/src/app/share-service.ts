import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShareService 
{
  constructor(private  http: HttpClient) {}
  user$ = this.http.get('https://jsonplaceholder.typicode.com/users')
  .pipe(
    shareReplay(1)
  );
}