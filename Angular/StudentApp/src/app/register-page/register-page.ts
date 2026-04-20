import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-page',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})

export class RegisterPage {
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });

  submitted = false;
  constructor(private router: Router) { }
  submit() {
    this.submitted = true;
    if (this.registerForm.invalid) return;
    const { username, password, confirmPassword } = this.registerForm.value;
    
    // password  check
    if (password !== confirmPassword) 
    {
      alert("Password not matching ");
      return;
    }

    //store  localStorage
    const user = { username, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert("Account created successfully ✅");
    // navigate to login
    this.router.navigate(['/login']);
  }
}
