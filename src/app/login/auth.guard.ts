import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { AuthService } from '../core/services/auth.service';
import { Observable } from 'rxjs';
import {take, tap} from 'rxjs/operators';

@Injectable({
    providedIn: LoginRoutingModule
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.checkAuthState(state.url);
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.canActivate(childRoute, state);
    }

    canLoad(route: Route): Observable<boolean> {
        //rout.path
        const url = window.location.pathname;

        return this.checkAuthState(url)
            .pipe(take(1));
    }

    private checkAuthState(url: string): Observable<boolean> { //aula 91
        return this.authService.isAuthenticated.pipe(
            tap(isLogged => {
                if (!isLogged) {
                    this.authService.redirectUrl = url;
                    this.router.navigate(['/login']);
                }
            })
        );
    }
}