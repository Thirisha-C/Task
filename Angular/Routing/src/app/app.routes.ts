import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { ProductDetails } from './product-details/product-details';
import { Reviews } from './reviews/reviews';
import { CartPage } from './cart-page/cart-page';
import { Wishlist } from './wishlist/wishlist';
import { NotFound } from './not-found/not-found';

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
        component: CartPage
    },
    {
        path: 'wishlist',
        component: Wishlist
    },
    {
        path: '**',
        component: NotFound
    }
];
