import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-user',
  imports: [CommonModule],
  templateUrl: './http-user.html',
  styleUrl: './http-user.css',
})
export class HttpUser implements OnInit
{
  users: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit()
  {
    let params = new HttpParams()
    .set('name', 'sri')
    .append('city', 'chennai')
    .append('city', 'covai');

    //get
    console.log('get name:', params.get('name'));

    //getAll
    console.log('getAll city:', params.getAll('city'));

    //has
    console.log('has age:', params.has('age'));

    //keys
    console.log('keys:', params.keys());

    //toString
    console.log('toString:', params.toString());
;
    //delete
    params = params.delete('name');
    console.log('after delete:', params.toString());

    this.http.get('https://jsonplaceholder.typicode.com/users', {params})
    .subscribe(res => {
      console.log('API Response:', res);
      this.users = res as any[];
    })
  }
}
