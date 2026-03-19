import { ResolveFn } from '@angular/router';

export const productResolver: ResolveFn<any> = (route, state) => {
  const id = route.paramMap.get('id');

  return {
    id: id,
    name: 'Resolved Product'
  };
};
