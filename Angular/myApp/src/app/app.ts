import { Component } from '@angular/core';
import { Header } from './routing/header/header';
import { Footer } from './routing/footer/footer';
import { RouterOutlet } from '@angular/router';

// import { Product } from './service/product/product'; 
 // import { Header } from './header/header';
// import { User } from './user/user';
// import { ProductPage } from './product-page/product-page';
// import { ProductService } from './service/product-service';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('Product Page'); 
}
 