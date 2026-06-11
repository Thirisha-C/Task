import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-student-login',
  imports: [ReactiveFormsModule, CommonModule, NgxSkeletonLoaderModule],
  templateUrl: './student-login.html',
  styleUrl: './student-login.css',
})
export class StudentLogin implements OnInit {
  isLoading = signal(true);

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  ngOnInit() {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1000);
  }

  submitForm() {
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid);
  }

  resetForm() {
    this.loginForm.reset();
  }

  setName() {
    this.loginForm.patchValue({
      name: 'Sona'
    });
  }
}
