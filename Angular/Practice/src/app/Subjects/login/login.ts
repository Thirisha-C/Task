import { Component } from '@angular/core';
import { AppService } from '../app-service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login 
{
  constructor(private appService: AppService) {}

  onLogin()
  {
    this.appService.login();
  }

  onLogout()
  {
    this.appService.logout();
  }
}