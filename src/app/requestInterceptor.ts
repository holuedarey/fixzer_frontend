import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { AuthService } from './shared/auth.service';
import { Constants } from './constant';


@Injectable()
export class httpInterceptor implements HttpInterceptor {

    constructor( public auth: AuthService ) {  }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token = localStorage.getItem(Constants.STORAGE_VARIABLES.TOKEN);
        // console.log('my token : ', token || 'nothing')
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                console.log(error);
                let data = {};
                data = {
                    reason: error && error.error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                return throwError(error);
            }));
    }
}

export const HttpInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: httpInterceptor,
    multi: true
}
