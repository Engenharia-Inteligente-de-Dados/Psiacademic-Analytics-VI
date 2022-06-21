import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MAIN_ROUTES, TEXTOS } from './sideBar.const';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public collapseShow = "hidden";
  public readonly indexsMenus = {
    search: 0,
    dash: 1,
    consult: 2,
  }
  public textos = TEXTOS
  public routes = MAIN_ROUTES;
  public SubRoutes = []
  public activeSubRoutes = [];
  constructor(
    private router :Router,
    private activeRoute: ActivatedRoute){
   }

  ngOnInit(): void {
    const path = this.router.url
    const route = this.routes.find(route => path.includes(route.Route))
    // if(route){
    //   this.activeSubRoutes = route.SubRoutes;
    // }
    // else{
    //   this.activeSubRoutes = this.routes[this.indexsMenus.dash].SubRoutes;
    //   this.navigate(this.routes[this.indexsMenus.dash])
    // }
  }

  navigate(route: any){
    this.activeSubRoutes = route.SubRoutes;
    this.router.navigate([route.Route],
      {
      relativeTo:this.activeRoute,
    })
  }


  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }

}
