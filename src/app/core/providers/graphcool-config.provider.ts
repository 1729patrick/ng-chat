import { InjectionToken } from '@angular/core';

const graphcoolId = 'cjjt5rckb3ldu0139inss7zve';

export interface GraphcoolConfig {
    simpleApi: string;
    subscriptionsApi: string;
    fileApi: string;
    fileDownloadURL: string;
}

export const graphcoolConfig: GraphcoolConfig = {
    simpleApi: `https://api.graph.cool/simple/v1/${graphcoolId}`,
    subscriptionsApi: `wss://subscriptions.graph.cool/v1/${graphcoolId}`,
    fileApi: `https://api.graph.cool/file/v1/${graphcoolId}`,
    fileDownloadURL: `https://files.graph.cool/${graphcoolId}`,
};


export const GRAPHCOOL_CONFIG = new InjectionToken<GraphcoolConfig>(
    'graphcool.config',
    {
        providedIn: 'root',
        factory: () => {
            // const authService = inject<AuthService>(AuthService); //injeção de dependencia sem ser no contrutor
            return graphcoolConfig;
        }
    }
);
