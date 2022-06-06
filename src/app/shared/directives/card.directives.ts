import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[CardContent]'
})
export class CardContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
