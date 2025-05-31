import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {BaseService} from './base.service';
import {ChildAService} from './child-a.service';
import {ChildBService} from './child-b.service';
import {featureFlag} from './feature-flag';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    {
      provide: BaseService,
      useFactory: (childAService: ChildAService, childBService: ChildBService) => {
        return featureFlag.useAFeature ? childAService : childBService;
      },
      deps: [ChildAService, ChildBService]
    }
  ]
};
