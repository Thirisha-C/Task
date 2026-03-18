import { Routes } from '@angular/router';
import { Home } from './service/home/home';
import { Product } from './service/product';
import { Cart } from './service/cart/cart';

export const routes: Routes = [
    {path: '', component: Home },
    {path: 'cart', component: Cart },
    {path: 'product', component: Product}
];
