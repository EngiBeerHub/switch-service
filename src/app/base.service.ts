import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService {
  abstract greet(): void
}
