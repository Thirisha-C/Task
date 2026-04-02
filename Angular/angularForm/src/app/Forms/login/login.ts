import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username: string = '';
  password: string = '';
  login(form: any)
  {
    if(form.valid)
    {
      alert("LoggedIn successfully");
    }
    else{
      alert("Enter the username and passwor");
    }
  }
}
