import {
  Component,
  ContentChildren,
  ElementRef,
  forwardRef,
  Input,
  QueryList,
} from '@angular/core';
import { OptionPrimaryComponent } from '../options/option-primary/option-primary.component';
import { ComboBoxClass } from '../../combo-box/combo-box.component';

@Component({
  selector: 'mod-select-box',
  templateUrl: './select-box.component.html',
  styles: [
    `
      .btn:focus,
      .btn__content:focus {
        outline: none;
      }
      .btn:focus > .btn__content {
        outline: 5px auto -webkit-focus-ring-color; /* keyboard-only focus styles */
      }
    `,
  ],
})
export class SelectBoxComponent {
  @Input() key = '';
  @Input() maximumItemShow = 8;
  @Input() label: string;
  @Input() isMultiple = false;

  optionItemHeight = 2.28; // rem
  optionWrapperPaddingY = 0.75; // 3/4 rem  = 3 * tailwind unit
  optionWrapperMaxHeight =
    this.optionItemHeight * this.maximumItemShow +
    this.optionWrapperPaddingY * 2 +
    'rem';
  active = false;

  @ContentChildren(forwardRef(() => OptionPrimaryComponent), {
    read: ElementRef,
    descendants: true,
  })
  selectItems: QueryList<OptionPrimaryComponent>;
}
