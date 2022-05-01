import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { artigosMock } from 'src/app/shared/components/search-result/search-result.mock';
import { OPTIONS_CONSULT_FORM } from './consult-form/consult-form-const';

@Component({
  selector: 'app-consults',
  templateUrl: './consults.component.html',
  styleUrls: ['./consults.component.scss']
})
export class ConsultsComponent implements OnInit {

  public tipo: string;
  public options = OPTIONS_CONSULT_FORM;
  public articles = artigosMock();

  constructor(private route: ActivatedRoute,
    ) {
      console.log('ola')
     this.route.params.subscribe(params => {
        this.tipo = params.tipo;
        console.log(this.tipo);
      });
  }

  ngOnInit(): void {
    console.log(`ConsultsComponent`);
  }
  pesquisar(){
    console.log(`pesquisar`)
  }

  formRecivie(form){
    console.log(form)
  }
}
