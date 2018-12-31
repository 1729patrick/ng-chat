import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from '../core/services/auth.service';
import {map, tap} from 'rxjs/operators';

@Injectable()
export class AutoLoginGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        // return this.authService.isAuthenticated.pipe(
        //     tap(isAuthenticated => isAuthenticated ? this.router.navigate(['/dashboard']) : null),
        //     map(isAuthenticated => !isAuthenticated)
        // );

        return of(true); // of para criar um observable
    }

}
