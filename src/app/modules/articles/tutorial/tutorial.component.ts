import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation,SwiperOptions } from "swiper";
SwiperCore.use([Navigation]);

@Component({
  selector: 'tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class TutorialComponent implements OnInit {

  constructor() { }

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
