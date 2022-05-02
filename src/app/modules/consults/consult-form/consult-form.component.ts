import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FORM_DATA, FORM_GROUPS } from './consult-form-const';
import { Input } from '@angular/core';
import { ConsultTypeSelectOPtions, ConsultType, FormAtrributeConsult } from '../../../shared/enums/types.enums';

@Component({
  selector: 'consult-form',
  templateUrl: './consult-form.component.html',
  styleUrls: ['./consult-form.component.scss'],
})
export class ConsultFormComponent implements OnInit {
  @Input() templateTipo?: any = `anos`;
  @Input() options?: any;
  @Output(`emitForm`) emitFormEvent = new EventEmitter<any>();
  public formConsulta: FormGroup;
  public formInfo: any;
  public ready = false;
  private anosfull
  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.setForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes){
      if(changes.templateTipo){
        this.setForm();
      }
    }

  }

  setForm() {
    this.ready = false;
    const fun = FORM_GROUPS[this.templateTipo]();
    this.formConsulta = new FormGroup(fun);
    this.formInfo = FORM_DATA[this.templateTipo]();
    this.formInfo.forEach(element => {
      if(element.type === 'select'){
        if((element.selectOptions === ConsultTypeSelectOPtions.anosOptionsI ) || (element.selectOptions === ConsultTypeSelectOPtions.anosOptionsF)){
          this.anosfull = this.options[ConsultTypeSelectOPtions.anosOptions];
          this.options[element.selectOptions] = this.anosfull
          this.formConsulta.controls[element.attr].setValue(this.options[ConsultTypeSelectOPtions.anosOptions][0]);
        }
        else{
          this.formConsulta.controls[element.attr].setValue(this.options[element.selectOptions][0]);
        }
      }
    });
    this.emitForm()
    this.ready = true;
  }

  emitForm(){
    console.log(this.formConsulta.value);
    this.emitFormEvent.emit(this.formConsulta.value);
  }

  filter(attr){
    if(FormAtrributeConsult.AnoI === attr){
      const index = this.anosfull.findIndex(ano => Number(this.formConsulta.value.anoi) <= ano)
      this.formConsulta.controls[FormAtrributeConsult.AnoF].setValue(this.options[ConsultTypeSelectOPtions.anosOptionsF][index]);
    }
  }
}
