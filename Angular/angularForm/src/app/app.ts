import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './Forms/login/login';
import { RegisterForm } from './Forms/register-form/register-form';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, RegisterForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularForm');
}
