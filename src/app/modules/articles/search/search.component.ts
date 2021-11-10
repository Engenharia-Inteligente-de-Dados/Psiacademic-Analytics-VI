import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OPTIONS_SEARCH } from './search.const';


@Component({
  selector: 'psi-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('simpleInput') simpleInput!: ElementRef;
  @ViewChild('compostInput') compostInput!: ElementRef;

  @Output() search_init = new EventEmitter()
  private bounceInput!: ReturnType<typeof setTimeout>;
  public searchInput: FormControl = new FormControl()
  public inputSelected: any
  public arrayInputs: any[] = []
  public alternativas = OPTIONS_SEARCH
  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.search_init.emit(true)
  }

  selectInputType(event:KeyboardEvent){
     this.inputSelected = this.alternativas.find((option)=>{
      return option.key == this.searchInput.value
    })
    this.ref.detectChanges();
    this.compostInput?.nativeElement.focus()
    if(event.key === 'Enter' && !this.inputSelected){
      console.log(`adicionar caso não seja por datalist condição para formatar apartir de uma string unica o objeto`)
    }

  }

inputHandler(event:KeyboardEvent){
  console.log(event)
  if(event.key === 'Enter' && this.inputSelected[this.inputSelected?.key].length > 0){
    this.changeStatusSearchOptions(this.inputSelected.id)
    this.arrayInputs.push(this.inputSelected)
    this.resetForms()
  }
  if(event.key === 'Backspace' && this.inputSelected[this.inputSelected?.key].length === 0){
    this.changeStatusSearchOptions(this.inputSelected.id)
    this.resetForms()
  }
}

searchInit(event:KeyboardEvent){
    clearInterval(this.bounceInput)
    if((this.searchInput.value.length || this.searchInput.touched) || this.arrayInputs.length >= 1){
        this.bounceInput = setTimeout(() => {
          this.search_init.emit(true)
          this.pesquisar()
        }, 1500);
      console.log(this.searchInput)
    }
  }

  pesquisar(){
  }

  changeStatusSearchOptions(id:number){
    this.alternativas.forEach(item=>{
      if(item.id == id){
        item.hidden = !item.hidden
      }
    })
  }

  resetForms(){
    this.inputSelected = undefined
    this.searchInput.setValue('')
    this.ref.detectChanges();
    this.simpleInput.nativeElement.focus()
  }

}
