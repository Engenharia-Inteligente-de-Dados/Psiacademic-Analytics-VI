import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  @ViewChild('imgsEl') imgsEl:ElementRef | undefined;
  public search_init = false

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  pesquisar(event:any){
    console.log(event)
    const {attributes,search} = event?.detail
  }
  remove_img(event:any){
    if(event && !this.search_init){
      console.log(this.imgsEl?.nativeElement)
      this.imgsEl?.nativeElement.classList.add('animate_fadeOutUp')
      setTimeout(()=>{
        this.search_init = !this.search_init
      },500)
    }

  }
}
