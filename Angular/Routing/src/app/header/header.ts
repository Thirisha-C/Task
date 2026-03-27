import { Component } from '@angular/core';
import { Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  
  constructor(private router: Router){}
  isLoggedIn(){
    return localStorage.getItem('isLoggedIn') === 'true';
  }
  logout(){
    localStorage.removeItem('isLoggedIn');
    alert('Logged Out!');
    this.router.navigate(['/']);
  }
}
