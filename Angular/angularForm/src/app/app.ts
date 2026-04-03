import { Component, signal } from '@angular/core';
import { Login } from './Forms/login/login';
import { RegisterForm } from './Forms/register-form/register-form';
import { Registration } from './Forms/registration/registration';
import { StudentForm } from './Forms/student-form/student-form';

@Component({
  selector: 'app-root',
  imports: [Login, RegisterForm, Registration,StudentForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularForm');
}
