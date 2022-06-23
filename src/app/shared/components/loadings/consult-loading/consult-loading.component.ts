import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'consult-loading',
  templateUrl: './consult-loading.component.html',
  styleUrls: ['./consult-loading.component.scss']
})
export class ConsultLoadingComponent implements OnInit {
  @Input() loading:boolean
  constructor() { }

  ngOnInit(): void {
  }

}
