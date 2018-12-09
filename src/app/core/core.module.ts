// ***** APENAS MODULOS NECESSARIOS PARA INICIAR A APLICACAO  -> core-module *****

import { NgModule, Optional, SkipSelf } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApolloConfigModule } from '../apollo-config.module';

@NgModule({
    exports: [
        BrowserAnimationsModule,
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
