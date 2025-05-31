import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BASE_SERVICE_TOKEN, BaseService} from './base.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'switch-service';
  private readonly baseService = inject(BASE_SERVICE_TOKEN);

  ngOnInit() {
    this.baseService.greet();
  }
}
