import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Ichart } from '../../interfaces/chart.interfaces';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'psi-card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.scss'],
})
export class CardChartComponent implements OnInit {
  @Input() actions? = {
    config: true,
    expand: true,
  };
  @Input() chart: Ichart | undefined;
  @Input() index?: number;

  @Output() redirect = new EventEmitter();
  public options: boolean = false;

  constructor(private modalSvc: ModalService) {}

  ngOnInit(): void {}

  openConfig() {
    const modal = this.modalSvc.showConfig({});
  }

  expand() {
    this.redirect.emit();
  }
}
