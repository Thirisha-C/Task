import { Routes } from '@angular/router';
import { Home } from './Signals/home/home';
import { CartPage } from './Signals/cart-page/cart-page';

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
