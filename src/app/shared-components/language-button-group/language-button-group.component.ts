import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mod-language-button-group',
  templateUrl: './language-button-group.component.html',
  styleUrls: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LanguageButtonGroupComponent),
      multi: true,
    },
  ],
})
export class LanguageButtonGroupComponent implements OnInit {
  @Input() languages: Array<string> = ['All', 'en', 'fr', 'pt', 'it', 'ru'];
  @Input() currentIndex = 0;
  @Input() multiple = false;
  @Output() languageChange: EventEmitter<
    string | Array<string>
  > = new EventEmitter<string | Array<string>>();
  _value: string | Array<string>;
  private propagateChange = (_: any) => {};
  private propagateTouched = () => {};

  constructor() {}

  ngOnInit(): void {}

  writeValue(value: any) {
    if (this.multiple) {
      if (value) {
        this._value = value;
      } else {
        if (this.languages.length > 0) {
          this._value = [this.languages[0]];
        }
      }
    } else {
      if (value) {
        this._value = value;
      } else {
        if (this.languages.length > 0) {
          this._value = this.languages[0];
        }
      }
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  selectLanguage(lang): void {
    // this.currentIndex = index;
    if (this.multiple) {
      let index = this._value.indexOf(lang);
      let tempVal = this._value as Array<string>;

      if (index > -1) {
        tempVal.splice(index, 1);
        this._value = tempVal;
      } else {
        tempVal.push(lang);
        this._value = tempVal;
      }
      this.propagateChange(tempVal);
      this.languageChange.emit(tempVal);
    } else {
      this._value = lang;
      this.propagateChange(lang);
      this.languageChange.emit(lang);
    }
  }
}
