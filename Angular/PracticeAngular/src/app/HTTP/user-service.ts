import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService 
{
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers()
  {
    return this.http.get(this.url);
  }

  getUserById(id: number)
  {
    return this.http.get(this.url);
  }
}