import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { ProductDetails } from './product-details/product-details';
import { Reviews } from './reviews/reviews';
import { CartPage } from './cart-page/cart-page';
import { Wishlist } from './wishlist/wishlist';
import { NotFound } from './not-found/not-found';
import { productGuardGuard } from './product-guard-guard';
import { Login } from './login/login';
import { Logout } from './logout/logout';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'products',
        component: Products
    },
    {
        path: 'product/:id',
        component: ProductDetails,
        children: [
            {
                path: 'reviews',
                component: Reviews
            }
        ]
    },
    {
        path: 'cart',
        component: CartPage,
        canActivate: [productGuardGuard]
    },
    {
        path: 'wishlist',
        component: Wishlist,
        canActivate: [productGuardGuard]
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'logout',
        component: Logout
    },
    {
        path: '**',
        component: NotFound
    }
];
