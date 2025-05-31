import {inject, Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChildAService implements BaseService {
  private readonly router = inject(Router);

  greet() {
    console.log(this.router.url);
    console.log('===A Service!===');
  }
}
