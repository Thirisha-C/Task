import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule, CommonModule, NgxSkeletonLoaderModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm implements OnInit {
  isLoading = signal(true);

  user = {
    name: '',
    email: '',
    password: ''
  };

  ngOnInit() {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1000);
  }

  submitForm(form: any) {
    console.log(form.value);
    console.log(form.valid);
  }

  resetForm(form: any) {
    form.reset();
  }
}
