import { Directive } from '@angular/core';

@Directive({
  selector: 'form',
  host: {
    '(submit)': 'onSubmit($event)'
  }
})
export class TemplateFormDirective{
  onSubmit(event:Event) {
    console.log('Form submitted', event);
    return false;
  }
}
