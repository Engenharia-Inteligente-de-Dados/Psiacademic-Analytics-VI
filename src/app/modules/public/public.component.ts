import { Component, OnInit } from '@angular/core';
import { styleScrollbars } from 'src/app/shared/utils/customScroll';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    const scrollCustom = document.querySelector('#scrollCustom');
    styleScrollbars(scrollCustom)
  }

}
