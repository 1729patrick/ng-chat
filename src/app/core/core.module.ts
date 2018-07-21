// ***** APENAS MODULOS NECESSARIOS PARA INICIAR A APLICACAO  -> core-module *****

import  {NgModule, Optional, SkipSelf } from '@angular/core';

import { ApolloConfigModule } from '../apollo-config.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatToolbarModule } from '@angular/material';

@NgModule({
    exports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatListModule,
        ApolloConfigModule
    ]
})
export class CoreModule {

    constructor(
        @Optional() @SkipSelf() coreModule: CoreModule
    ) {

        if (coreModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
        }
    }

}
