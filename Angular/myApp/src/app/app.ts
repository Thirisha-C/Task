import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
 import { Product } from './service/product/product';
 import { bootstrapApplication } from '@angular/platform-browser';
 import { provideRouter } from '@angular/router';
 import { Routes } from '@angular/router';

 // import { Header } from './header/header';
// import { User } from './user/user';
// import { ProductPage } from './product-page/product-page';
// import { ProductService } from './service/product-service';
@Component({
  selector: 'app-root',
  imports: [Product, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Product Page'); 
}
 