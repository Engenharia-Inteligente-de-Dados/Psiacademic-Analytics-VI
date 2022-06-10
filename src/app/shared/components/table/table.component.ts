import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tabela',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() titulo: string;
  @Input() campos: any[];
  @Input() linhas: any[] = [];
  @Input() light=true;
  @Output() emit = new EventEmitter<any>();
  constructor() {
    console.log('tabela')
   }

  ngOnInit(): void {
  }

  emitAcao(acao: number, linha: any) {
    console.log(acao, linha);
    this.emit.emit({ acao, linha });
  }

}
