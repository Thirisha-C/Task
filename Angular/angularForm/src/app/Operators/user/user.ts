import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserPost } from '../user-post/user-post';

@Component({
  selector: 'app-user',
  imports: [UserPost, CommonModule, FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {

  users: any[] =[];
  selectedUserId!: number;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser()
    .pipe(
      map((users: any[]) => {
        console.log('Api User:', users);
        return users.map(user => ({
          id: user.id,
          name: user.name 
        }
      ));
      })
    )
    .subscribe(res => {
      this.users = res;
    });
  }
  selectUser(index: number) 
  {
    this.selectedUserId = index + 1;
  }
}
