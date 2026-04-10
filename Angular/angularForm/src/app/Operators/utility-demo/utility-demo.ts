import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service';
import { finalize, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-utility-demo',
  imports: [CommonModule],
  templateUrl: './utility-demo.html',
  styleUrl: './utility-demo.css',
})
export class UtilityDemo implements OnInit {

  users: any[]=[];
  loading: boolean = false;
  errorMsg: string= '';

  constructor(private userService: UserService) {}

  ngOnInit()
  {
    this.fetchUser();
  }
  fetchUser()
  {
    this.userService.getUser().pipe(
      tap(() => {
        console.log('API start');
        this.loading=true;
        this.errorMsg='';
      }),
      tap(res => {
        console.log('API response:', res);
      }),
      finalize(() => {
        console.log('API ended');
        this.loading= false;
      }))
      .subscribe({
        next: (res) => {
          this.users = res;
        },
        error: (err) => {
          console.log('Error:', err);
          this.errorMsg = 'Failed to load users';
        }
      });
  }
}
