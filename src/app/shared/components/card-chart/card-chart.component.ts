import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { IChart, IChartActions, Icharts } from '../../interfaces/chart.interfaces';
import { ModalService } from '../../services/modal.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'psi-card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.scss'],
})
export class CardChartComponent implements OnInit {
  @Input() actions?: IChartActions = {
    config: false,
    expand: false,
    filter: {
      inUse: false,
    }
  };
  @Input() chart: IChart | undefined;
  @Input() index?: number;
  @Input() unique?: boolean = false;
  @Output() redirect = new EventEmitter();
  @Output() filterEvent = new EventEmitter();
  public filterControl:any;
  constructor(
    private modalSvc: ModalService,
    private def: ChangeDetectorRef
    ) {

    }

  ngOnInit(): void {
    this.filterControl = new FormControl(this.chart?.actions?.filter?.value);

    this.def.detectChanges();
  }

  ngAfterViewInit(): void {
    this.filterControl =  new FormControl(this.chart?.actions?.filter?.value);

  }

  openConfig() {
    const modal = this.modalSvc.showConfig({});
  }

  expand() {
    this.redirect.emit();
  }

  filter() {
    this.filterEvent.emit({chart: this.chart, newValue: this.filterControl});
  }

}
