import {
  NgModule,
  Component,
  Input,
  Output,
  OnInit,
  forwardRef,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { fromEvent } from 'rxjs';
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  tap,
} from 'rxjs/operators';

export interface SelectType {
  id: string;
  label: string;
  isSelected?: boolean;
  selected?: boolean;
}

@Component({
  selector: 'mod-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor, OnInit {
  @ViewChild('input') input: ElementRef;

  @Input() items: any[] = [];
  @Input() selectedItem: any;
  @Input() displayField = 'label';
  @Input() valueField = 'id';
  @Input() multiselect = false;
  @Input() isClickOpen = false;
  @Input() searchable = false;
  @Input() aysncData = false;
  @Input() dir = 'bottom';
  @Output() doSelect = new EventEmitter<any>();
  @Output() getData = new EventEmitter<string>();

  public _selectedItem: any; //SelectType | Array<SelectType>;
  public isOpenList = false;
  isDisabled = false;
  isSelected = false;
  originalItems: any[];

  private propagateChange = (_: any) => {};
  private propagateTouched = () => {};

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    // server-side search
    if (this.searchable && this.input) {
      fromEvent(this.input.nativeElement, 'keyup')
        .pipe(
          filter(Boolean),
          debounceTime(150),
          distinctUntilChanged(),
          tap((text) => {
            let searchText = this.input.nativeElement.value;

            if (this.aysncData && this.getData) {
              this.getData.emit(searchText);
            } else {
              if (!this.originalItems) {
                this.originalItems = this.items;
              }

              this.items = this.originalItems.filter((item) =>
                item[this.displayField]
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
            }
          })
        )
        .subscribe();
    }
  }

  writeValue(value: any): void {
    if (this.multiselect) {
      if (value && Array.isArray(value) && value.length > 0) {
        this._selectedItem = this.items.filter((item) =>
          value.includes(item[this.valueField])
        );
        if (!this._selectedItem) {
          this._selectedItem = [];
        }
      } else {
        if (this.items && this.items.length > 0) {
          this._selectedItem = [this.items[0]];
        } else {
          this._selectedItem = [];
        }
      }
    } else {
      if (value) {
        this._selectedItem = this.items.find(
          (item) => item[this.valueField] == value
        );
        if (!this._selectedItem) {
          this._selectedItem = {};
        }
      } else {
        if (this.items && this.items.length > 0) {
          this._selectedItem = this.items[0];
        } else {
          this._selectedItem = {};
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
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onClick(item) {
    if (!this.multiselect) {
      this.isOpenList = false;
      this._selectedItem = item;
      this.propagateChange(this._selectedItem[this.valueField]);
      this.doSelect.emit(item);
    } else {
      let tempSelectedItem = this._selectedItem as Array<any>;
      let index = tempSelectedItem.indexOf(item);
      if (index > -1) {
        tempSelectedItem.splice(index, 1);
        this._selectedItem = tempSelectedItem;
        // item.selected = false;
      } else {
        tempSelectedItem.push(item);
        this._selectedItem = tempSelectedItem;
        // item.selected = true;
      }
      this.propagateChange(
        this._selectedItem.map((item) => item[this.valueField])
      );
      this.doSelect.emit(this._selectedItem);
    }
  }

  searchTask(value) {
    // console.log(value);
  }

  onBlur() {
    if (!this._selectedItem || !this._selectedItem[this.valueField]) {
      this.input.nativeElement.value = '';
    } else {
      this.input.nativeElement.value = this._selectedItem[this.displayField];
    }
  }
}
