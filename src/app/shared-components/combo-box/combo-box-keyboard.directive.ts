import {
  AfterContentChecked,
  AfterContentInit,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  QueryList,
} from '@angular/core';
import {
  DOWN_ARROW_KEY_CODE,
  ENTER_KEY_CODE,
  ESCAPE_KEY_CODE,
  TAB_KEY_CODE,
  UP_ARROW_KEY_CODE,
} from 'src/constants';

/* For Multiple Select Box */
const containerList = {};
const labelList = {};
const itemList = {};
const overlayList = {};
const activeList = {};
const itemIdList = {};
const isSearchableList = {};
const isMultipleList = {};
const searchList = {};
const checkboxList = {};

@Directive({
  selector: '[modComboBox]',
})
export class ComboBoxDirective
  implements AfterContentInit, AfterContentChecked, OnDestroy {
  _active = false; // status hide-show of select box
  @Input() set active(active: boolean) {
    this._active = active;
    this.changeActiveStatus();
  }
  get active() {
    return this._active;
  }
  @Input() key: string; // key: unique identifier of select-box
  @Input() isSearchable = false;
  @Input() isMultiple = false;
  @ContentChild('container', { read: ElementRef })
  container: ElementRef;
  @ContentChild('label', { read: ElementRef })
  label: ElementRef;
  @ContentChild('search', { read: ElementRef }) boxSearch: ElementRef;
  @ContentChildren('checkbox', { read: ElementRef, descendants: true })
  checkboxs: QueryList<ElementRef>;
  _items: QueryList<ElementRef>;
  @ContentChildren('item', { read: ElementRef, descendants: true })
  set items(items: QueryList<ElementRef>) {
    this._items = items;
    this.changeItemsWhenSearch();
  }
  get items() {
    return this._items;
  }
  @ContentChild('overlay', { read: ElementRef })
  overlay: ElementRef;
  itemIds: Array<string> = []; // id list: get from items

  constructor(private elementRef: ElementRef) {}

  // get key select box active
  static findKeySelecBoxActive() {
    return Object.entries(activeList).find(([key, value]) => value === true)[0];
  }

  ngAfterContentInit() {
    const items = this.items.toArray();
    for (const item of items) {
      this.itemIds.push(item.nativeElement.id);
    }
    containerList[this.key] = this.container;
    labelList[this.key] = this.label;
    overlayList[this.key] = this.overlay;
    itemList[this.key] = items;
    activeList[this.key] = this.active;
    isSearchableList[this.key] = this.isSearchable;
    isMultipleList[this.key] = this.isMultiple;
    itemIdList[this.key] = this.itemIds;
    searchList[this.key] = this.boxSearch;
    checkboxList[this.key] = this.checkboxs.toArray();
  }

  changeActiveStatus() {
    activeList[this.key] = this.active;
  }

  changeItemsWhenSearch() {
    if (activeList[this.key]) {
      const items = this.items.toArray();
      this.itemIds = [];
      for (const item of items) {
        this.itemIds.push(item.nativeElement.id);
      }
      itemList[this.key] = items;
      itemIdList[this.key] = this.itemIds;
      containerList[this.key] = this.container;
      checkboxList[this.key] = this.checkboxs.toArray();
    }
  }

  ngAfterContentChecked() {
    activeList[this.key] && (overlayList[this.key] = this.overlay);
    !activeList[this.key] && delete overlayList[this.key];
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(
    ev: KeyboardEvent
  ) {
    // check current select box is active
    if (
      Object.values(activeList).some((val: boolean) => val === true) &&
      this.key === ComboBoxDirective.findKeySelecBoxActive()
    ) {
      const activeEleKey = ComboBoxDirective.findKeySelecBoxActive();

      /*
       * Esc event handle
       */
      if (ev.keyCode === ESCAPE_KEY_CODE) {
        this.eventEscapeKeycode(activeEleKey);
      }

      /*
       * Tab event handle
       */
      if (ev.keyCode === TAB_KEY_CODE) {
        this.eventTabKeycode(activeEleKey);
      }

      /*
       * Enter event handle
       */
      if (ev.keyCode === ENTER_KEY_CODE) {
        this.eventEnterKeycode(activeEleKey);
      }

      // check if clicked item -> activeElementId inside itemIdList
      const currentActiveIndex: number = itemIdList[activeEleKey].indexOf(
        this.activeElementId
      );

      /*
       * Down event handle
       */
      if (ev.keyCode === DOWN_ARROW_KEY_CODE) {
        this.eventDownKeycode(activeEleKey, currentActiveIndex);
      }

      /*
       * Up event handle
       */
      if (ev.keyCode === UP_ARROW_KEY_CODE) {
        this.eventUpKeycode(activeEleKey, currentActiveIndex);
      }
    }
  }

  eventEscapeKeycode(activeEleKey) {
    document.getElementById(overlayList[activeEleKey].nativeElement.id).click();
    labelList[activeEleKey].nativeElement.focus();
    return;
  }

  eventTabKeycode(activeEleKey) {
    document.getElementById(overlayList[activeEleKey].nativeElement.id).click();
    return;
  }

  eventEnterKeycode(activeEleKey) {
    const ele = itemList[activeEleKey].find(
      (item) => item.nativeElement.id === this.activeElementId
    );

    // If activeElementId inside active selectItemList
    if (ele) {
      // If multiple => click input checkbox, otherwise return
      if (isMultipleList[activeEleKey]) {
        const idx = itemList[activeEleKey].findIndex(
          (item) => item.nativeElement.id == this.activeElementId
        );
        // click input checkbox, activeElementId is combo-box-item(ID) (parent of input)
        document
          .getElementById(checkboxList[activeEleKey][idx].nativeElement.id)
          .click();
        return;
      }

      return;
    }

    // Otherwise: click at active selectLabel => access input search if searchable, otherwise return
    if (isSearchableList[activeEleKey]) {
      // access input search
      document
        .getElementById(searchList[activeEleKey].nativeElement.id)
        .focus();
      return;
    }

    return;
  }

  eventDownKeycode(activeEleKey, currentActiveIndex) {
    const isLastItem = currentActiveIndex === itemList[activeEleKey].length - 1;

    // reject if current item is the last item
    if (isLastItem) {
      return;
    }

    itemList[activeEleKey][currentActiveIndex + 1]?.nativeElement.focus();

    if (currentActiveIndex < 0) {
      // fix issue list-item scroll at the first time click down_arrow ( currentActiveIndex === -1)
      setTimeout(() => {
        containerList[activeEleKey].nativeElement.scrollTop = 0;
      }, 100);
      return;
    }

    // scroll down
    containerList[activeEleKey].nativeElement.scrollTop =
      (containerList[activeEleKey].nativeElement.scrollHeight /
        itemIdList[activeEleKey].length) *
      (currentActiveIndex - 1);
    return;
  }

  eventUpKeycode(activeEleKey, currentActiveIndex) {
    // check if activeElementId inside active itemIdList
    const isFirstItem = currentActiveIndex === 0;

    if (isFirstItem) {
      return;
    }

    if (currentActiveIndex < 0) {
      itemList[activeEleKey][
        itemIdList[activeEleKey].length - 1
      ].nativeElement.focus();
      // scroll to bottom
      setTimeout(() => {
        containerList[activeEleKey].nativeElement.scrollTop =
          containerList[activeEleKey].nativeElement.scrollHeight;
      }, 100);
      return;
    }

    itemList[activeEleKey][currentActiveIndex - 1].nativeElement.focus();

    // scroll to top
    containerList[activeEleKey].nativeElement.scrollTop =
      (containerList[activeEleKey].nativeElement.scrollHeight /
        itemIdList[activeEleKey].length) *
      (currentActiveIndex - 1);
    return;
  }

  // get activeElement
  get activeElementId() {
    return document.activeElement.id;
  }

  ngOnDestroy() {
    delete containerList[this.key];
    delete labelList[this.key];
    delete itemList[this.key];
    delete overlayList[this.key];
    delete activeList[this.key];
    delete itemIdList[this.key];
    delete isSearchableList[this.key];
    delete isMultipleList[this.key];
    delete searchList[this.key];
    delete checkboxList[this.key];
  }
}
