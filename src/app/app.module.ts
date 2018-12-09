import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CoreModule,
        SharedModule,
        LoginModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
