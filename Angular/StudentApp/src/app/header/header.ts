import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isloggedIn: boolean = false;
  constructor(private router: Router) {}

ngOnInit() 
{
  this.isloggedIn = !!localStorage.getItem('isLoggedIn');
}

logout() 
{
  localStorage.removeItem('isLoggedIn');
  this.router.navigate(['/login']);
}
}
