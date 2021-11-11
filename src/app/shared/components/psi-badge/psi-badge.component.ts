import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'psi-badge',
  templateUrl: './psi-badge.component.html',
  styleUrls: ['./psi-badge.component.scss']
})
export class PsiBadgeComponent implements OnInit {
  @Input() icon?: string
  @Input() label?: string
  @Input() index?: number
  @Input() color?: string = 'primary'
  @Input() size?:  string = 'size-13'
  @Input() cursor?: string = 'default'
  @Input() animate?: string = 'notAnimete'

  @Output() onClick: EventEmitter<any> = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickEvent(event:Event) {
    if(this.icon) {
    this.onClick.emit({event:event, index:this.index})
    }
  }
}
