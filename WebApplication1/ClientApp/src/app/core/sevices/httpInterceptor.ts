
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router'
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../store'
import { ErrorEncountered } from '../store/actions/core.actions'


@Injectable()
export class HttpServiceInetrceptor implements HttpInterceptor {
    constructor(private router: Router, private store: Store<State>) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return next.handle(request)
            .pipe(catchError((errorResponse: HttpErrorResponse) => {
            //    if (errorResponse instanceof HttpErrorResponse) {
                this.store.dispatch(new ErrorEncountered("An error has Accourd"));
               // }
                return throwError(errorResponse);
            }));
    }
}
