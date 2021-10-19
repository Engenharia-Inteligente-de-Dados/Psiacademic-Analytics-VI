import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'psi-badge',
  templateUrl: './psi-badge.component.html',
  styleUrls: ['./psi-badge.component.scss']
})
export class PsiBadgeComponent implements OnInit {
  @Input() label?: string
  @Input() color?: string = 'primary'
  @Input() size?: string = 'size-13'
  constructor() { }

  ngOnInit(): void {
  }

}
