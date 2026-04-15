import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login
 {
    loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  submitted = false;
  constructor(private router: Router) { }
  login() 
  {
    this.submitted = true;
    if (this.loginForm.invalid) return;

    const enteredname = this.loginForm.value.username;
    const enteredPwd = this.loginForm.value.password;

    // get stored user
    const data = localStorage.getItem('user');
    if (!data) 
    {
      alert("No user found. Kindly register");
      return;
    }
    const user = JSON.parse(data);

    // check
    if (user.username === enteredname && user.password === enteredPwd) 
    {
      alert("Login successful");

      // mark logged in
      localStorage.setItem('isLoggedIn', 'true');

      // navigate to dashboard
      this.router.navigate(['/dashboard']);
    } 
    else {
      alert("Invalid credentials");
    }
  }
  // access for validation
  get username() 
  {
    return this.loginForm.get('username');
  }

  get password() 
  {
    return this.loginForm.get('password');
  }
}