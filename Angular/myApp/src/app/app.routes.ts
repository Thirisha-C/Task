import { Routes } from '@angular/router';
import { Home } from './routing/home/home';
import { Product } from './service/product/product';
import { ProductDetails } from './routing/product-details/product-details';
import { NotFound } from './routing/not-found/not-found';
import { authGuard } from './routing/gurds/auth-guard';
import { deactivateGuard } from './routing/guards/deactivate-guard';
import { productResolver } from './routing/guards/product-resolver';

export const routes: Routes = [

    //router config
    {path: '', component: Home },
    {path: 'product', component: Product},
    {
        path: 'product/:id', component: ProductDetails,
        resolve: {product: productResolver}, //resolver guuard
        canDeactivate: [deactivateGuard] 
    },
    {path: '**', component: NotFound} //wildcard
];
