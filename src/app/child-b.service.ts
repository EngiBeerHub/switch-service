import {Injectable} from '@angular/core';
import {BaseService} from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ChildBService extends BaseService {
  override greet() {
    console.log('===B Service!===');
  }
}
