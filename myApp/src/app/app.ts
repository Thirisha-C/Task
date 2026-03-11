import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { ProductPage } from './product-page/product-page';

@Component({
  selector: 'app-root',
  imports: [User, ProductPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myApp');
}
