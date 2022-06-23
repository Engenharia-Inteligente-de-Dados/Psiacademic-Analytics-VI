import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chart-loading',
  templateUrl: './chart-loading.component.html',
  styleUrls: ['./chart-loading.component.scss']
})
export class ChartLoadingComponent implements OnInit {
  @Input() loading = false;
  constructor() { }

  ngOnInit(): void {
  }

}
