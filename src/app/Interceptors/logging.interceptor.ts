import { HttpErrorResponse, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    tap((event: HttpEvent<any>) => {
      console.log('Incoming HTTP response', event);
    })
  );
};