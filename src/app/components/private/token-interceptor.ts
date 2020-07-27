import { Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthGuardService } from './guards/auth-guard.service';
import { Observable } from 'rxjs';
import { UserState } from '../public/state/user.state';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public auth: AuthGuardService, public store: Store) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const jwtToken = this.store.selectSnapshot(UserState.jwtToken)
        if(jwtToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + jwtToken
                }
            });
        }
        return next.handle(request);
    }

}
