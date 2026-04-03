import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  onSubmit(){
    if(this.registerForm.valid){
      alert("Registration Success");
      console.log(this.registerForm.value);
    }
    else{
      alert("Fill all the details");
    }
  }
}
