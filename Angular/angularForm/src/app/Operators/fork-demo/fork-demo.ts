import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-fork-demo',
  imports: [],
  templateUrl: './fork-demo.html',
  styleUrl: './fork-demo.css',
})
export class ForkDemo implements OnInit {

  user: any;
  posts: any[]=[];
  todos: any[]=[];
  loading = true;
  
  constructor(private http: HttpClient) {}
  ngOnInit() 
  {
     forkJoin({
      user: this.http.get('https://jsonplaceholder.typicode.com/users/1'),
      posts: this.http.get('https://jsonplaceholder.typicode.com/posts?userId=1'),
      todos: this.http.get('https://jsonplaceholder.typicode.com/todos?userId=1')
    })
    .subscribe(res => {
      console.log('User:', res.user);
      console.log('Post:', res.posts);
      console.log('Todo:', res.todos);
    })
  }
}
