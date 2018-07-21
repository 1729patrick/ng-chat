// ***** MÓDULO QUE CONFIGURA O APOLLOCLIENT PARA USAR O GRAPHQL NO PROJETO *****

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {environment} from '../environments/environment';
import {onError} from 'apollo-link-error';
import {ApolloLink} from 'apollo-link';


@NgModule({
    imports: [// nessa sequencia
        HttpClientModule,
        ApolloModule,
        HttpLinkModule
    ]

})
export class ApolloConfigModule {
    constructor(
        private apollo: Apollo,
        private httpLink: HttpLink
    ) {

        const uri = 'https://api.graph.cool/simple/v1/cjjt5rckb3ldu0139inss7zve';// url

        const http = this.httpLink.create({ uri });

        const linkError = onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
                graphQLErrors.map(({ message, locations, path }) =>
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                    ),
                );
            }
            if (networkError) {
                console.log(`[Network error]: ${networkError}`);
            }
        });

        this.apollo.create({
            link: ApolloLink.from([
                linkError, // seguir sequencia necessaria
                http
            ]),
            cache: new InMemoryCache(),
            connectToDevTools: !environment.production
        });
    }



}
