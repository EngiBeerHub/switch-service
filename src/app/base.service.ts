import {Injectable} from '@angular/core';
import {ChildAService} from './child-a.service';
import {ChildBService} from './child-b.service';
import {featureFlag} from './feature-flag';

@Injectable({
  providedIn: 'root',
  useFactory: (childAService: ChildAService, childBService: ChildBService)=> {
    return featureFlag.useAFeature ? childAService : childBService
  },
  deps: [ChildAService, ChildBService]
})
export abstract class BaseService {
  abstract greet(): void
}
