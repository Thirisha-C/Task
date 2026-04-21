import { Routes } from '@angular/router';
import { Home } from './home/home';
import { CartPage } from './cart-page/cart-page';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'cartPage',
        component: CartPage
    }
];
