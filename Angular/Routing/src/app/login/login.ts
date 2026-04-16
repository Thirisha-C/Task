import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';

  constructor(private router: Router) {}
  isLoggedIn = signal(false);

  login(){
    if(this.username && this.password)
      {
      localStorage.setItem('isLoggedIn', 'true');
      this.isLoggedIn.set(true); //signal update
      //add token
      localStorage.setItem('token', 'abc123');
      alert('Login successfull');
      this.router.navigate(['/']);
    }
    else{
      alert('Enter username & password');
    }
  }
}
