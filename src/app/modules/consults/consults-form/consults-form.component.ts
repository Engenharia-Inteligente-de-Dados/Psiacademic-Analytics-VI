import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IOptionsSelectConsulta } from 'src/app/shared/interfaces/opcoes-select-consultas.interface';
import { ConsultaType, ConsultTypeSelectOPtions, FormAtrributeConsult, FormType } from '../../../shared/enums/types.enums';
import { FORM_TEMPLATE } from './consult-form-const';

@Component({
  selector: 'consults-form',
  templateUrl: './consults-form.component.html',
  styleUrls: ['./consults-form.component.scss']
})
export class ConsultsFormComponent implements OnInit {
  @Input() templateTipo?: ConsultaType = ConsultaType.Anos;
  @Input() options?: IOptionsSelectConsulta;
  @Output(`emitForm`) emitFormEvent = new EventEmitter<any>();

  public formTemplate
  public formConsulta: FormGroup
  public anosfull: any;
  public ready = false
  private readonly defaultIndex = 0
  constructor(
    private ref: ChangeDetectorRef
    ) {
      console.log('consult form')
    }

  ngOnInit(): void {
    this.setForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.templateTipo){
      this.setForm();
    }
  }

  initForm(){
    this.formConsulta =  new FormGroup({
      anoi: new FormControl(''),
      ano: new FormControl(''),
      anof: new FormControl(''),
      titulo: new FormControl(''),
      resumo: new FormControl(''),
      palavraschave: new FormControl(''),
      transtorno: new FormControl(''),
      repositorio: new FormControl(''),
    })
  }

  emitForm(){
    this.emitFormEvent.emit(this.formConsulta.value);
  }

  filter(attr){
    if(FormAtrributeConsult.AnoI === attr){
      const index = this.anosfull.findIndex(ano => Number(this.formConsulta.value.anoi) <= ano)
      this.formConsulta.controls[FormAtrributeConsult.AnoF].setValue(this.options[ConsultTypeSelectOPtions.anosOptionsF][index]);
    return
    }
  }


  private isAnoOptions(el:string){
    return (el === ConsultTypeSelectOPtions.anosOptionsI) || (el === ConsultTypeSelectOPtions.anosOptionsF) || (el === ConsultTypeSelectOPtions.anosOptions)
  }

  private trataAnos(){
    const TODOS = `Todos`
    const find = this.options.anosOptions.findIndex(ano => ano === TODOS)
    if(find>0){
      this.options.anosOptions.splice(find, 1);
    }
    return {
      anosOptionsI: (element) => {
        this.anosfull = this.options.anosOptions;
        this.options[element.selectOptions] = this.options.anosOptions;
        this.formConsulta.controls[element.attr].setValue(this.options.anosOptions[this.defaultIndex]);
      },
      anosOptionsF: (element) => {
        this.anosfull = this.options.anosOptions;
        this.options[element.selectOptions] = this.options.anosOptions;
        const last = this.options.anosOptions.length - 1;
        this.formConsulta.controls[element.attr].setValue(this.options.anosOptions[last]);
      },
      anosOptions: (element) => {
        this.anosfull = this.options.anosOptions;
        this.options[element.selectOptions] = this.options.anosOptions;
        const find = this.options.anosOptions.find(ano => ano === TODOS)
        if(!!!find){
          this.options.anosOptions.unshift(TODOS);
        }
        this.formConsulta.controls[element.attr].setValue(this.options.anosOptions[this.defaultIndex]);
      },
    };
  }

  setForm(){
    this.ready = false
    try {
      this.initForm();
      this.formTemplate = FORM_TEMPLATE[this.templateTipo]();
      this.formTemplate.forEach((element:any) => {
        if(element.type === FormType.select){
          const isAnoOptions = this.isAnoOptions(element.selectOptions);
          if(isAnoOptions){
            this.trataAnos()[element.selectOptions](element);
          }
          else{
            this.formConsulta.controls[element.attr].setValue(this.options[element.selectOptions][this.defaultIndex]);
          }
        }
      });
      this.ready = true
    } catch (error) {
      console.log(error)
    } finally {
      this.ref.detectChanges()
    }
  }

}
