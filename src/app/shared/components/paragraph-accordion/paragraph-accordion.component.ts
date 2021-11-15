import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'psi-paragraph-accordion',
  templateUrl: './paragraph-accordion.component.html',
  styleUrls: ['./paragraph-accordion.component.scss']
})
export class ParagraphAccordionComponent implements OnInit {

  @Input() resume!: string;
  public collapse =  true;

  constructor() { }

  ngOnInit(): void {
  }

  toogleAccordion(){
    this.collapse = !this.collapse
  }
}
