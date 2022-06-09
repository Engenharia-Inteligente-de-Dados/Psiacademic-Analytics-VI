import { Component, ContentChild, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() colorBg?: string = `bg-white`;
  @Input() textColor?: string = 'text-gray-700';


  constructor() { }

  ngOnInit(): void {
  }

}
