import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MAIN_ROUTES, MAIN_ROUTES_SUBROUTES } from '../../../consts/routes.const';

@Component({
  selector: 'menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  public routes = MAIN_ROUTES;
  public subRt = MAIN_ROUTES_SUBROUTES;
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

  openItem(itemName) {
    document.getElementById('section').style.display = "block";
    var i, x, tablinks;
    x = document.getElementsByClassName("item");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    document.getElementById(itemName).style.display = "block";
  }
}
