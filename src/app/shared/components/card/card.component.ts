import { Component, ContentChild, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() colorBg?: string = `bg-white`;
  @Input() textColor?: string = 'text-coolGray-700';


  constructor() { }

  ngOnInit(): void {
  }

}
