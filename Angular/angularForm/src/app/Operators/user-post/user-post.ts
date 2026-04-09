import { Component, Input, input, OnChanges, OnInit } from '@angular/core';
import { debounceTime, filter, Subject, switchMap } from 'rxjs';
import { UserService } from '../user-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-post',
  imports: [CommonModule],
  templateUrl: './user-post.html',
  styleUrl: './user-post.css',
})
export class UserPost implements OnInit, OnChanges {

  @Input() userId!: number;
  posts: any[] = [];

  userId$ = new Subject<number>();

  constructor(private userService: UserService) {}

  ngOnInit() 
  {
    this.userId$
    .pipe(
      debounceTime(200), //200ms wait
      filter(id => !!id),
      switchMap(id => {
        console.log('Api call:', id);
        return this.userService.getPosts(id);
  })
)
    .subscribe(res => {
      this.posts = res;
    });
  }
  ngOnChanges() {
    console.log('UserId change:', this.userId);
    if (this.userId) {
      this.userId$.next(this.userId);
    }
  }
}
