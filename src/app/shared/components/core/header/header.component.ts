import { Component, OnInit } from '@angular/core';
import { MAIN_ROUTES } from './mainRoutes.const';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public routes = MAIN_ROUTES
  constructor() { }

  ngOnInit(): void {
  }

}
