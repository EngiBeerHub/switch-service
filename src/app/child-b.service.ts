import {Injectable} from '@angular/core';
import {BaseService} from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ChildBService implements BaseService {
  greet() {
    console.log('===B Service!===');
  }
}
