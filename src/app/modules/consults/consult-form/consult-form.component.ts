import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FORM_TEMPLATE, FORM_GROUPS } from './consult-form-const';
import { Input } from '@angular/core';
import { ConsultTypeSelectOPtions, FormAtrributeConsult, ConsultType } from '../../../shared/enums/types.enums';
import { IOptionsSelectConsulta } from 'src/app/shared/interfaces/consulta.interface';

@Component({
  selector: 'consult-form',
  templateUrl: './consult-form.component.html',
  styleUrls: ['./consult-form.component.scss'],
})
export class ConsultFormComponent implements OnInit {
  @Input() templateTipo?: any = ConsultType.Anos;
  @Input() options?: IOptionsSelectConsulta;
  @Output(`emitForm`) emitFormEvent = new EventEmitter<any>();
  public formConsulta: FormGroup;
  public formInfo: any;
  private anosfull = [];
  ready = false;
  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.setForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.templateTipo){
      this.setForm();
    }

  }

  setForm() {
    this.ready = false
    try {
      const fun = FORM_GROUPS[this.templateTipo]();
      console.log(fun);
      this.formConsulta = new FormGroup(fun);
      this.formInfo = FORM_TEMPLATE[this.templateTipo]();
      this.formInfo.forEach(element => {
        if(element.type === 'select'){
          if((element.selectOptions === ConsultTypeSelectOPtions.anosOptionsI ) || (element.selectOptions === ConsultTypeSelectOPtions.anosOptionsF)){
            this.anosfull = this.options.anosOptions;
            this.options[element.selectOptions] = this.anosfull
            this.formConsulta.controls[element.attr].setValue(this.options.anosOptions[0]);
          }
          else{
            this.formConsulta.controls[element.attr].setValue(this.options[element.selectOptions][0]);
          }
        }
      });
      this.ready = true
    } catch (error) {
      console.log(error);
      this.ready = false
    }
    finally {
      this.ref.detectChanges();
    }

  }

  emitForm(event:any){
    this.emitFormEvent.emit(this.formConsulta.value);
  }

  filter(attr){
    if(FormAtrributeConsult.AnoI === attr){
      const index = this.anosfull.findIndex(ano => Number(this.formConsulta.value.anoi) <= ano)
      this.formConsulta.controls[FormAtrributeConsult.AnoF].setValue(this.options[ConsultTypeSelectOPtions.anosOptionsF][index]);
    }
  }
}
