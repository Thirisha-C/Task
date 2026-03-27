import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';

  constructor(private router: Router) {}

  login(){
    if(this.username && this.password)
      {
      localStorage.setItem('isLoggedIn', 'true');
      alert('Login successfull');
      this.router.navigate(['/']);
    }
    else{
      alert('Enter username & password');
    }
  }
}
