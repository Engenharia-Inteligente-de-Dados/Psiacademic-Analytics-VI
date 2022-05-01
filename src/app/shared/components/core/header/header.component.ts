import { Component, OnInit } from '@angular/core';
import { MAIN_ROUTES } from './routes.const';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public routes = MAIN_ROUTES;
  public activeSubRoutes = [];
  constructor(
    private router :Router,
    private activeRoute: ActivatedRoute){
    }


  ngOnInit(): void {
    const path = this.router.url
    const route = this.routes.find(route => path.includes(route.route))
    if(route){
      this.activeSubRoutes = route.subRoutes;
    }
    else{
      this.activeSubRoutes = [];
      this.navigate(this.routes[0])
    }
  }

  navigate(route: any){
    this.activeSubRoutes = route.subRoutes;
    this.router.navigate([route.route],
      {
      relativeTo:this.activeRoute,
    })
  }
}
