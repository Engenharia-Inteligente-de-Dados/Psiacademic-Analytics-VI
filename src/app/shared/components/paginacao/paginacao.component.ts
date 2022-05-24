import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPagination } from '../../interfaces/pagination.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'psi-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.scss']
})
export class PaginacaoComponent implements OnInit {
  @Input() paginacao: IPagination;
  @Output() paginaChange = new EventEmitter<IPagination>();

  limitForm = new FormControl({ value : 0 , disabled: false, minValue: 1});

  constructor() {
    this.limitForm.valueChanges.subscribe(value => {
      this.paginacao.limite = value;
      this.paginaChange.emit(this.paginacao);
    });
   }

  ngOnInit(): void {
    this.limitForm.setValue(this.paginacao.limite);
  }

  changePage(page: number) {
    this.paginacao.pagina = page;
    this.paginaChange.emit(this.paginacao);
  }

}
