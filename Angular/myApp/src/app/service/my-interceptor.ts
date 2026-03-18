import { HttpInterceptorFn } from '@angular/common/http';

export const myInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    setHeaders: {
      Authorization: 'thrisha18'
    }
  });
  console.log("Request intercepted:",modifiedReq);
  return next(modifiedReq);
};
