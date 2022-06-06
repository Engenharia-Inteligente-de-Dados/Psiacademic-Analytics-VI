import { Component, ContentChild, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() colorBg?: string = 'bg-slate-700';
  @Input() textColor?: string = 'text-slate-100';


  constructor() { }

  ngOnInit(): void {
  }

}
