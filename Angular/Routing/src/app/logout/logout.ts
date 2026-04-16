import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout implements OnInit
{
  constructor(
    private router: Router
  ){}
ngOnInit()
{
  this.logout();
}
  
  logout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    alert('Logged out');
    this.router.navigate(['/login']);
  }
}
