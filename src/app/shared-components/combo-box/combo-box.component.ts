import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { fromEvent, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

export interface ComboBoxLabel {
  default: string;
  active: string;
}

export interface ComboBoxClass {
  default: string;
  active: string;
}

@Component({
  selector: 'mod-combo-box',
  templateUrl: './combo-box.component.html',
})
export class ComboBoxComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() isSearchable = false;
  @Input() isMultiple = false;
  @Input() items = [];
  @Input() maximumItemShow = 6;
  @Input() bindKey: string;
  @Input() bindValue: string;
  @Input() selectedItems = [];
  @Input() blackListItems = [];
  @Input() cssClass: ComboBoxClass;
  @Input() isShowChevronDownIcon = true;
  @Input() showValue: string;
  @Input() labelData: ComboBoxLabel;

  @Output() itemChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() closed: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('comboBox') comboBox: ElementRef;
  @ViewChild('comboBoxBody') comboBoxBody: ElementRef;
  @ViewChild('search') comboBoxoSearch: ElementRef;

  active = false;
  checkedItems = [];
  keyword: string;

  optionItemHeight = 2.78; // rem
  optionWrapperPaddingY = 0.75; // 3/4 rem  = 3 * tailwind unit
  optionWrapperMaxHeight =
    this.optionItemHeight * this.maximumItemShow +
    this.optionWrapperPaddingY * 2 +
    'rem';

  // for accessbilities by keyboard
  @Input() key = '';

  ngOnInit(): void {
    this.setupData();
  }

  ngAfterViewInit() {
    this.updateTheSuitableUIPosition();
    // call updateTheSuitableUIPosition() when window resize
    const windowResize$ = fromEvent(window, 'resize').pipe(
      debounce(() => timer(500))
    );
    windowResize$.subscribe(() => {
      this.updateTheSuitableUIPosition();
    });
  }

  updateTheSuitableUIPosition() {
    const comboBox = this.comboBox.nativeElement.getBoundingClientRect();
    const nativeElement = this.comboBoxBody.nativeElement;

    const style =
      comboBox.left > comboBox.width
        ? { right: 0, left: 'auto' }
        : {
            right: 'auto',
            left: 0,
          };

    Object.assign(nativeElement.style, style);
  }

  updateTranslateY() {
    const comboBox = this.comboBox.nativeElement.getBoundingClientRect();
    const nativeElement = this.comboBoxBody.nativeElement;

    const styleY =
      comboBox.bottom + nativeElement.offsetHeight > window.innerHeight
        ? {
            transform: 'translateY(-35px)',
          }
        : { transform: null };
    nativeElement.style.transform = styleY.transform;
    nativeElement.style.visibility = 'visible';
  }

  ngOnChanges(): void {
    this.setupData();
  }

  setupData() {
    // set checked checkbox on load
    if (this.selectedItems) {
      this.items = this.items.map((item) => {
        item.checked = this.isActive(item);
        return item;
      });
    }
    // push selected item to checked array to display
    this.checkedItems = [...this.selectedItems];
  }

  // check origin
  checkDeactive(id: number) {
    return this.blackListItems.some((ele) => +ele.id === id);
  }

  onItemClicked(item: any, event) {
    // skip this topic have existed on origin topics
    if (this.blackListItems.some((ele) => ele.id === +item.id)) {
      return event.preventDefault();
    }

    if (!this.isMultiple) {
      this.selectedItems = [item];
      this.checkedItems = [item];
      this.itemChanged.emit([item]);
    }
  }

  onSelectClicked() {
    // change active status when not isSearchable nor isMultiple
    if (this.isSearchable || this.isMultiple || !this.active) {
      this.active = true;
      this.updateTranslateY();

      if (this.isSearchable) {
        setTimeout(() => {
          this.comboBoxoSearch.nativeElement.focus();
        }, 10);
      }
    } else {
      this.close();
    }
  }

  onItemChanged(item: any) {
    const idx = this.checkedItems.findIndex(
      (i) => i[this.bindKey] === item[this.bindKey]
    );
    if (item.checked) {
      idx === -1 && this.checkedItems.push(item);
    } else {
      idx !== -1 && this.checkedItems.splice(idx, 1);
    }
    // emit to parent
    this.itemChanged.emit(this.checkedItems);
  }

  get checkedItemValue() {
    if (this.labelData) {
      return this.labelData.default;
    }

    return this.checkedItems
      .map((elem) =>
        this.showValue ? elem[this.showValue] : elem[this.bindValue]
      )
      .join(', ');
  }

  isActive(item) {
    return this.selectedItems.some(
      (sltItem) => sltItem[this.bindKey] === item[this.bindKey]
    );
  }

  close() {
    this.active = false;
    this.comboBoxBody.nativeElement.style.visibility = 'hidden';
    this.closed.emit();
  }
}
