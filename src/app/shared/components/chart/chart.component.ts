import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import Chart  from 'chart.js/auto';


@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() chart: any;
  @Input() id: string | number;

  private ChartContext: any;
  constructor() {
    }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.ChartContext?.destroy();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.ChartContext?.update();
    console.log(changes);
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(){
    let ctx:any = document.getElementById(`chart-${this.id}`) as HTMLCanvasElement;
    ctx = ctx.getContext("2d");
    this.ChartContext = new Chart(ctx, this.chart);
  }

}
