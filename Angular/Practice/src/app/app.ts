import { Component, signal } from '@angular/core';
import { Header } from './Subjects/header/header';
import { Login } from './Subjects/login/login';
import { ProductPage } from './Subjects/product-page/product-page';

@Component({
  selector: 'app-root',
  imports: [ProductPage, Login, Header, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Practice');
}
