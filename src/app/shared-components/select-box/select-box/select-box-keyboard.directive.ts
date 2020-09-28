import {
  AfterContentChecked,
  AfterContentInit,
  ContentChild,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
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
const activeList = {};
const itemIdList = {};
const overlayList = {};
const isMultipleList = {};

@Directive({
  selector: '[modSelectBox]',
})
export class SelectBoxDirective
  implements AfterContentInit, AfterContentChecked, OnDestroy {
  _active: boolean; // status hide-show of select box
  @Input() set active(active: boolean) {
    this._active = active;
    // change status here
    this.changeActiveStatus();
  }
  get active() {
    return this._active;
  }
  @Input() key: string; // key: unique identifier of select-box
  @Input() selectItems: any; // option list of select-box
  @Input() isMultiple = false;
  @ContentChild('container', { read: ElementRef })
  container: ElementRef;
  @ContentChild('selectLabel', { read: ElementRef })
  selectLabel: ElementRef;
  @ContentChild('overlay', { read: ElementRef })
  overlay: ElementRef;
  itemIds: Array<string> = []; // id list: get from selectItems

  constructor(private elementRef: ElementRef) {}

  // get key select box active
  static findKeySelecBoxActive() {
    return Object.entries(activeList).find(([key, value]) => value === true)[0];
  }

  ngAfterContentInit() {
    const selectItems = this.selectItems.toArray();
    for (const item of selectItems) {
      this.itemIds.push(item.nativeElement.id);
    }
    containerList[this.key] = this.container;
    labelList[this.key] = this.selectLabel;
    itemList[this.key] = selectItems;
    activeList[this.key] = this.active;
    itemIdList[this.key] = this.itemIds;
    overlayList[this.key] = this.overlay;
    isMultipleList[this.key] = this.isMultiple;
  }

  changeActiveStatus() {
    activeList[this.key] = this.active;
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
      this.key === SelectBoxDirective.findKeySelecBoxActive()
    ) {
      // find select box active
      const activeEleKey = SelectBoxDirective.findKeySelecBoxActive();

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
      // if multiple => only click activeElementId
      if (isMultipleList[activeEleKey]) {
        document.getElementById(this.activeElementId).click();
        return;
      }

      document
        .getElementById(containerList[activeEleKey].nativeElement.id)
        .click();
      document.getElementById(this.activeElementId).click();
      // focus label because select-box closed
      document.getElementById(labelList[activeEleKey].nativeElement.id).focus();
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

    if (isFirstItem || currentActiveIndex < 0) {
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
    delete activeList[this.key];
    delete itemIdList[this.key];
    delete overlayList[this.key];
    delete isMultipleList[this.key];
  }
}
