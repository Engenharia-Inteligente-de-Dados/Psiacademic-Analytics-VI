import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { IArticle } from '../../../modules/articles/article.interfaces';
import { IconType, ViewType } from '../../enums/types.enums';
import { IPagination } from '../../interfaces/pagination.interface';
import { IrequestMoreDataEvent } from './search-result.interface';

@Component({
  selector: 'psi-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  @Input() articles?: IArticle[];
  @Input() paginacao?: IPagination;
  @Output() requestEvent: EventEmitter<IrequestMoreDataEvent> =
    new EventEmitter();

  viewTypeCard = true;
  iconType: string = IconType.iCard;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}

  requestMoreData(request: IrequestMoreDataEvent | any) {
    console.log(`requestMoreData search-result`, request);
    if (request.viewType === ViewType.card) {
      this.paginacao.pagina++;
      request[`paginacao`] = this.paginacao;
      this.requestEvent.emit(request);
    }
  }

  changePage(change: IPagination) {
    this.paginacao = change;
    this.requestEvent.emit({
      paginacao: this.paginacao,
      viewType: ViewType.list,
    });
  }

  changeViewType() {
    this.viewTypeCard = !this.viewTypeCard;
    this.iconType = this.viewTypeCard ? IconType.iCard : IconType.iList;
    this.ref.detectChanges();
  }
}
