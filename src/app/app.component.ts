import {Component, OnInit} from '@angular/core';
import {AuthService} from './core/services/auth.service';
import {take} from 'rxjs/operators';
import {ErrorService} from './core/services/error.service';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
    // private apiURL = 'https://api.graph.cool/simple/v1/cjjt5rckb3ldu0139inss7zve';

    constructor(
        // private http: HttpClient,
        // private apollo: Apollo

        private authService: AuthService,
        private errorService: ErrorService,
        private snackbar: MatSnackBar
    ){
        // this.allUsers();

    }

    ngOnInit(): void {
        this.authService.autoLogin()
            .pipe(
                take(1))
            .subscribe(null, error => {
                const message = this.errorService.getErrorMessage(error);
                this.snackbar.open(message, 'Fechar', {duration: 3000});
            });
    }


// ***** GRAPHQL COM REQUISIÇÕES HTTP *****
// public allUsers(): void {
//     const body = {
//         query:
//             `query {
//                 allUsers{
//                       id
//                       name
//                       email
//                       password
//                 }
//             }`
//     };
//
//     this.http.post(this.apiURL, body)
//         .subscribe(data => console.log('Query ',data));
// }

// private createUser(): void {
//     const body = {
//         query:
//             `mutation CreateNewUser($name: String!, $email: String!, $password: String!) {
//                   createUser(
//                     name: $name
//                     email: $email
//                     password: $password
//                   ){
//                     id
//                     name
//                     email
//                   }
//                 }`,
//         variables:  {
//             name: 'Old Spice',
//             email: 'oldspice@work.com',
//             password: 'spiceold'
//         }
//     };
//     this.http.post(this.apiURL, body)
//         .subscribe(
//             data => console.log('Mutation ', data),
//             error => console.log(error),
//             () => this.allUsers()
// );
// }


// ***** GRAPHQL COM REQUISIÇÕES COM APOLLO *****
//     public allUsers(): void {
//         this.apollo.query({
//             query: gql`
//                 query {
//                     allUsers{
//                         id
//                         name
//                         email
//                         password
//                     }
//                 }
//             `
//         }).subscribe(data => console.log('Query ',data));
//     }


    // private createUser(): void {
    //     this.apollo.mutate({
    //         mutation: gql`
    //             mutation CreateNewUser($name: String!, $email: String!, $password: String!) {
    //                 createUser(
    //                     name: $name
    //                     email: $email
    //                     password: $password
    //                 ){
    //                     id
    //                     name
    //                     email
    //                 }
    //             }
    //         `,
    //         variables:  {
    //             name: 'Spice Old',
    //             email: 'spiceold@work.com',
    //             password: 'oldspice'
    //         }
    //     }).subscribe(
    //         data => console.log('Mutation ', data),
    //         error => console.log(error),
    //         () => this.allUsers()
    //     );
    // }
}
