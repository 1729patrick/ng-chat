import { Injectable } from '@angular/core';
import {Observable, ReplaySubject, throwError} from 'rxjs';
import { Apollo } from 'apollo-angular';
import { AUTHENTICATE_USER_MUTATION, SIGNUP_USER_MUTATION } from './auth.graphql';
import {catchError, map, tap} from 'rxjs/operators';
import {StorageKeys} from '../../storage-keys';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    redirectUrl: string;
    private _isAuthenticated = new ReplaySubject<boolean>(1);

    constructor(
        private apollo: Apollo
    ) {

        // this.signInUser({email: 'patrick@flexpro.com.br', password: 'patrick'}).subscribe(data=> {
        //     console.log(data);
        // });
        //
        // this.signUpUser({name: 'Patrick Battisti', email: 'p@b.com', password: 'patrick'}).subscribe(data=> {
        //     console.log(data);
        // });

        this.isAuthenticated.subscribe(res => {
            console.log('_isAuthenticated', res);
        });
    }

    get isAuthenticated(): Observable<boolean> {
        return this._isAuthenticated.asObservable();
    }

    signInUser(variables: {email: string, password: string}): Observable<{id: string, token: string}> {
        return this.apollo.mutate({
            mutation: AUTHENTICATE_USER_MUTATION,
            variables
        }).pipe(
            map(res => res.data.authenticateUser),
            tap(res => this.setAuthState({isAuthenticated: res !== null, token: res && res.token})),
            catchError(error => {
                this.setAuthState( { isAuthenticated: false, token: null });
                return throwError(error);
            })
        );
    }

    signUpUser(variables: {name: string, email: string, password: string}): Observable<{id: string, token: string}>{
        return this.apollo.mutate({
            mutation: SIGNUP_USER_MUTATION,
            variables
        }).pipe(
            map(res => res.data.signupUser),
            tap(res => this.setAuthState({isAuthenticated: res !== null, token: res && res.token})),
            catchError(error => {
                this.setAuthState( { isAuthenticated: false, token: null });
                return throwError(error);
            })
        );
    }

    private setAuthState(authData: { isAuthenticated: boolean, token: string }): void {
        if(authData.isAuthenticated){
            window.localStorage.setItem(StorageKeys.AUTH_TOKEN, authData.token);
        }
        this._isAuthenticated.next(authData.isAuthenticated);
    }
}
