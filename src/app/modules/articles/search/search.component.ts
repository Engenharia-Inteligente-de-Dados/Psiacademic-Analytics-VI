import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'psi-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() search_init = new EventEmitter()
  private bounceInput!: ReturnType<typeof setTimeout>;
  public searchInput: FormControl = new FormControl('')
  constructor() { }

  ngOnInit(): void {
  }

  getInput(event:any){
    clearInterval(this.bounceInput)
    if(this.searchInput.value.length || this.searchInput.touched){
      if( event?.keyCode === 13){
        this.search_init.emit(true)
        this.pesquisar()
      }
      else{
        this.bounceInput = setTimeout(() => {
          this.search_init.emit(true)
          this.pesquisar()
        }, 1500);
      }
      console.log(this.searchInput)
    }
  }

  pesquisar(){
    console.trace(`pesquisando`)
  }

}
