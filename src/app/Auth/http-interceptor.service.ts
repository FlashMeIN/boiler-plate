import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authSerice: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // get token
    const authToken = 'jwt_token';

    // clone url and add headers

    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + authToken)
    });
    return next.handle(authReq);
  }
}
