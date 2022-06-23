import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dash-loading',
  templateUrl: './dash-loading.component.html',
  styleUrls: ['./dash-loading.component.scss']
})
export class DashboardLoadingComponent implements OnInit {
  @Input() loading:Boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
