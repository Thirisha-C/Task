import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css',
})
export class RegisterForm {
  username = '';
  email = '';
  password = '';

  //formcontrol
  passwordControl = new FormControl('');
  submit(form: any){
    const password = this.passwordControl.value;
    if(form.valid && password){
      alert("Registered Successfully")
    }
    else{
      alert("Fill the required details");
    }
  }
}
