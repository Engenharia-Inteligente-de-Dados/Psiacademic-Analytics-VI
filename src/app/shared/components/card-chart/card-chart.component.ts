import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Ichart } from '../../interfaces/chart.interfaces';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'psi-card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.scss']
})
export class CardChartComponent implements OnInit {

  @Input() actions?: boolean = true;
  @Input() chart: Ichart | undefined;
  @Input() index?: number;

  @Output() redirect = new EventEmitter()
  public options:boolean = false;

  constructor(
    private modalSvc: ModalService,
    ) { }

  ngOnInit(): void {
  }


  openConfig(){
   const modal = this.modalSvc.showConfig({});
    console.log(`open cofig`,modal)
  }

  expand(){
    this.redirect.emit();
    console.log(`expand`)
  }

}
