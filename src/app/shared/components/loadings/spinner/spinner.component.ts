import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnChanges {
  @Input() loading;
  constructor(
    private cdref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.loading) {
      this.loading = changes.loading.currentValue;
      this.cdref.detectChanges();
    }
  }
}
