import { Component, Input, OnInit } from '@angular/core';
import { Ichart } from '../../interfaces/chart.interfaces';

@Component({
  selector: 'psi-card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.scss']
})
export class CardChartComponent implements OnInit {

  @Input() actions?: boolean = true;
  @Input() chart!: Ichart;
  hasOptions =  true
  public options:boolean = false;
  constructor() {
    this.hasOptions =this.chart.options ? this.options = true : this.options = false;
   }

  ngOnInit(): void {
  }


  config(){
    console.log(`open cofig`)
  }

  expand(){
    console.log(`expand`)
  }

}
