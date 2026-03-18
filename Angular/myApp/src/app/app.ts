import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
// import { Header } from './header/header';
// import { User } from './user/user';
import { ProductPage } from './product-page/product-page';
import { ProductService } from './service/product-service/product-service';

@Component({
  selector: 'app-root',
  imports: [ProductService, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myApp'); 
}
 