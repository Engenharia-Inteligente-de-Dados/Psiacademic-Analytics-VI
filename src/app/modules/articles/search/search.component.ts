import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SearchAttribute } from 'src/app/shared/enums/SearchAttribute.enum';
import { MULT_ATRIBUTE_SEARCH, OPTIONS_SEARCH } from './search.const';

@Component({
  selector: 'psi-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @ViewChild('simpleInput') simpleInput!: ElementRef;
  @ViewChild('compostInput') compostInput!: ElementRef;
  @Output() searchEmit = new EventEmitter();

  public multAtributeSearch = MULT_ATRIBUTE_SEARCH;
  public searchInput: FormControl = new FormControl();
  public inputSelected?: any;
  public arrayInputs: any[] = [];
  public alternativas = OPTIONS_SEARCH;
  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}

  InputSelect(event: KeyboardEvent) {
    if(this.multAtributeSearch){
      this.inputSelected = this.alternativas.find((option) => {
        return option.key == this.searchInput.value;
      });
      if (event.key === 'Enter' && !this.inputSelected) {
      }
      this.ref.detectChanges();
      this.compostInput?.nativeElement.focus();
    }
    else{
      if (event.key === 'Enter') {
        this.pesquisar();
      }
    }
  }

  inputHandler(event: KeyboardEvent) {
    if (
      event.key === 'Enter' &&
      this.inputSelected[this.inputSelected?.key].length > 0
    ) {
      this.addAttr(this.inputSelected);
    }
    if (
      event.key === 'Backspace' &&
      this.inputSelected[this.inputSelected?.key].length === 0
    ) {
      this.resetForms();
    }
  }

  pesquisar() {
    if(this.inputSelected && this.inputSelected[this.inputSelected?.key]?.length > 0){
      this.addAttr(this.inputSelected);
      this.searchEmit.emit({detail:{attributes: this.arrayInputs, palavras: this.searchInput.value}})
    }
    else{
      this.searchEmit.emit({detail:{attributes: this.arrayInputs, palavras: this.searchInput.value}});
    }
  }

  addAttr(attr: any) {
    if(attr[attr?.key] && attr[attr?.key].length > 0){
      this.arrayInputs.push(attr);
      this.changeStatusSearchOptions(attr.id);
      this.resetForms();
    }
  }
  remove(event: any) {
    console.log(event);
    const old = this.arrayInputs.splice(event.index, 1);
    this.changeStatusSearchOptions(old[0].id);
    this.clearAttr(old[0].id);
    this.ref.detectChanges();
  }

  clearAttr(id: number) {
    this.alternativas.forEach((option) => {
      if (option.id === id) {
        //esse tipagem do SearchAttribute para poder ter acesso ao key de option
        const key = option.key as SearchAttribute;
        option[key] = '';
      }
    });
  }

  changeStatusSearchOptions(id: number) {
    this.alternativas.forEach((item) => {
      if (item.id == id) {
        item.hidden = !item.hidden;
      }
    });
  }

  resetForms() {
    this.inputSelected = undefined;
    this.searchInput.setValue('');
    this.ref.detectChanges();
    this.simpleInput.nativeElement.focus();
  }
}
