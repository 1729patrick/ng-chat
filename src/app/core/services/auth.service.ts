import { Injectable } from '@angular/core';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import { Apollo } from 'apollo-angular';
import { AUTHENTICATE_USER_MUTATION, SIGNUP_USER_MUTATION } from './auth.graphql';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

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
    }

    get isAuthenticated(): Observable<boolean> {
        return this._isAuthenticated.asObservable();
    }

    signInUser(variables: {email: string, password: string}): Observable<{id: string, token: string}> {
        return this.apollo.mutate({
            mutation: AUTHENTICATE_USER_MUTATION,
            variables
        }).pipe(
            map(res => res.data.authenticateUser)
        );
    }

    signUpUser(variables: {name: string, email: string, password: string}): Observable<{id: string, token: string}>{
        return this.apollo.mutate({
            mutation: SIGNUP_USER_MUTATION,
            variables
        }).pipe(
            map(res => res.data.signupUser)
        );
    }
}
