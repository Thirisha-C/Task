import { CanActivateFn } from '@angular/router';
import { inject} from '@angular/core';
import { Router } from '@angular/router';

export const productGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = false;

  if(isLoggedIn){
    return true;
  }
  else{
    alert('Please login');
    router.navigate(['/']);
    return false;
  }
};
