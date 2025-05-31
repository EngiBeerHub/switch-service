import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BaseService} from './base.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'switch-service';
  private readonly baseService = inject(BaseService);

  ngOnInit() {
    this.baseService.greet();
  }
}
