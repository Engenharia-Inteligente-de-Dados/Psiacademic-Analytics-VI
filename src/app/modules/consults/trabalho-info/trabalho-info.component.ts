import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ITrabalho } from '../../../shared/interfaces/trabalhos.interface';

@Component({
  selector: 'trabalho-info',
  templateUrl: './trabalho-info.component.html',
  styleUrls: ['./trabalho-info.component.scss'],
})
export class TrabalhoInfoComponent implements OnInit {
  @Input() trabalho: ITrabalho;
  @Output() dismiss = new EventEmitter<any>();

  constructor() {}
  ngOnInit(): void {}

  dissmiss(event: any) {
    event.stopPropagation();
    this.dismiss.emit();
  }

  backdropdissmiss(event: any) {
    event.stopPropagation();
    if (event.target !== event.currentTarget) {
      return;
    }
    this.dismiss.emit();
  }

  abrirLink() {
    window.open(this.trabalho.url, '_blank');
  }
}
