import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OPTIONS_CONFIG } from './config.const';

interface Iconfig{
  id?: number | string;
  title?: string;
  chartType?:string;
  xValue?:string | string[];
  yValue?:string | string[];
}

@Component({
  selector: 'psi-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  @Input() newChart: boolean = false;
  @Input() config: Iconfig = {
    id: '',
    title: '',
    chartType: '',
    xValue: '',
    yValue: '',
  };
  public options = OPTIONS_CONFIG;
  public configForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
   this.configForm = new FormGroup({
      id: new FormControl(this.config.id),
      title: new FormControl(this.config.title, Validators.required),
      chartType: new FormControl(this.config.chartType || this.options[0].value, Validators.required),
      xValue: new FormControl(this.config.xValue, Validators.required),
      yValue: new FormControl(this.config.yValue, Validators.required),
    });
  }

}
