import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatToolbarModule } from '@angular/material';
import { ApolloConfigModule } from './apollo-config.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatListModule,
        ApolloConfigModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
