import { Component, Input } from '@angular/core';

@Component({
  selector: 'mod-option-primary',
  templateUrl: './option-primary.component.html',
})
export class OptionPrimaryComponent {
  @Input() active = false;
  @Input() class = '';
  @Input() isMultiple = false;
  @Input() deactive = false;
}
