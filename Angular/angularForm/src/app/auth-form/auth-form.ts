import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-auth-form',
  imports: [ReactiveFormsModule],
  templateUrl: './auth-form.html',
  styleUrl: './auth-form.css',
})
export class AuthForm {
  authForm: FormGroup;

  //Form Builder
  constructor(private fb: FormBuilder){
    this.authForm = this.fb.group({
      username: [''],
      email: ['']
    });
  }

  //setValue

  setData() {
    this.authForm.setValue({
      username: 'abc',
      email: 'abc12@gmail.com'
    });
  }

  //patch
  updateName() {
    this.authForm.patchValue({
      username: 'Updated Name'
    });
  }
  onSubmit(){
     if(this.authForm.valid){
          alert("Form submitted");
        }
  }
}
