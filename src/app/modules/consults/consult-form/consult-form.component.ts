import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ANOS_OPTIONS, FORM_DATA, FORM_GROUPS } from './consult-form-const';
import { Input } from '@angular/core';

@Component({
  selector: 'consult-form',
  templateUrl: './consult-form.component.html',
  styleUrls: ['./consult-form.component.scss'],
})
export class ConsultFormComponent implements OnInit {
  @Input() templateTipo?: any = `anos`;
  @Input() options?: any;
  //public templateTipo ='anos';
  public formConsulta: FormGroup;
  public formInfo: any;
  public ready = false;

  constructor(private ref: ChangeDetectorRef) {
    this.setForm();
  }

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
    this.ready = true;
  }

  test(): void {
    console.log(this.templateTipo);
    this.setForm();
    this.ref.detectChanges();
  }
}
