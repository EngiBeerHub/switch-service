import {Injectable, InjectionToken} from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
export interface BaseService {
  /* abstract */
  greet(): void;
}

export const BASE_SERVICE_TOKEN = new InjectionToken<BaseService>('BaseService');
