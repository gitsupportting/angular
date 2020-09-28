import {
  AfterContentInit,
  ContentChildren,
  Directive,
  ElementRef,
  HostListener,
  QueryList,
  Input,
} from '@angular/core';
import {
  DOWN_ARROW_KEY_CODE,
  ENTER_KEY_CODE,
  ESCAPE_KEY_CODE,
  LEFT_ARROW_KEY_CODE,
  RIGHT_ARROW_KEY_CODE,
} from 'src/constants';

const mousedownEvent = new MouseEvent('mousedown', {
  view: window,
  bubbles: true,
  cancelable: true,
});
const mouseupEvent = new MouseEvent('mouseup', {
  view: window,
  bubbles: true,
  cancelable: true,
});
const mouseoverEvent = new MouseEvent('mouseover', {
  view: window,
  bubbles: true,
  cancelable: true,
});
const clickEvent = new MouseEvent('click', {
  view: window,
  bubbles: true,
  cancelable: true,
});

@Directive({ selector: '[modGroupToken]' })
export class ModGroupTokenDirective implements AfterContentInit {
  highLightIds: Set<string> = new Set();
  @ContentChildren('wordOriginal', { read: ElementRef, descendants: true })
  wordOriginals: QueryList<ElementRef> | any;
  @ContentChildren('wordSolution', { read: ElementRef, descendants: true })
  wordSolutions: QueryList<ElementRef> | any;
  @ContentChildren('tokenList', { read: ElementRef, descendants: true })
  tokens: QueryList<ElementRef> | any;

  _isShowGroupToken = false;
  @Input() set isShowGroupToken(isShowGroupToken: boolean) {
    this._isShowGroupToken = isShowGroupToken;
  }
  get isShowGroupToken() {
    return this._isShowGroupToken;
  }

  @Input() set selectedItems(selectedItems: Set<number>) {
    this.highLightIds = new Set<string>();
    for (const i of selectedItems) {
      this.highLightIds.add(`${this.wordOriginals[i].nativeElement.id}`);
    }
    // focus the last item
    if (selectedItems.size > 0) {
      const max = Math.max(...[...selectedItems]);
      this.wordOriginals[max].nativeElement.focus();
    }
  }

  constructor(private elementRef: ElementRef) {}

  ngAfterContentInit() {
    this.wordOriginals = (this.wordOriginals as QueryList<
      ElementRef
    >).toArray() as Array<ElementRef>;
    this.wordSolutions = (this.wordSolutions as QueryList<
      ElementRef
    >).toArray() as Array<ElementRef>;
    this.tokens = (this.tokens as QueryList<ElementRef>).toArray() as Array<
      ElementRef
    >;
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(
    ev: KeyboardEvent
  ) {
    // check item focused inside box
    setTimeout(() => {
      if (this.isActiveInsideBox()) {
        if (!this.isShowGroupToken) {
          this.highLightIds = new Set<string>();
        }

        if (ev.keyCode === ENTER_KEY_CODE) {
          this.eventEnterKeycode();
        }
        if (ev.keyCode === ESCAPE_KEY_CODE) {
          this.eventEscapeKeycode();
        }
        if (ev.keyCode === RIGHT_ARROW_KEY_CODE) {
          this.eventRightKeycode();
        }
        if (ev.keyCode === LEFT_ARROW_KEY_CODE) {
          this.eventLeftKeycode();
        }
        if (ev.keyCode === DOWN_ARROW_KEY_CODE) {
          this.eventDownKeycode();
        }
      }
    });
  }

  isActiveInsideBox() {
    return this.elementRef.nativeElement.contains(
      document.getElementById(this.activeElementId)
    );
  }

  isActiveInside(element: any) {
    return element.some((item) =>
      item.nativeElement.contains(document.getElementById(this.activeElementId))
    );
  }

  resetGroupToken() {
    this.isShowGroupToken = false;
    this.highLightIds = new Set<string>();
  }

  eventEnterKeycode() {
    /* show group-token */
    if (this.isActiveInside(this.wordOriginals)) {
      // If is not show group token => only show one element word origin
      if (!this.isShowGroupToken) {
        // show group token contain current word focused
        document
          .getElementById(this.activeElementId)
          .dispatchEvent(mousedownEvent);
        document
          .getElementById(this.activeElementId)
          .dispatchEvent(mouseupEvent);
        this.isShowGroupToken = true;
        // add element active to highLight array
        this.highLightIds.add(document.activeElement.id);
        // focus search group token button

        return;
      }

      // add element to highLight
      this.highLightIds.add(document.activeElement.id);
      // merge token here
      document
        .getElementById(this.highLightIds.values().next().value)
        .dispatchEvent(mousedownEvent);
      for (const item of this.highLightIds) {
        document.getElementById(item).dispatchEvent(mouseoverEvent);
      }
      document.getElementById(this.activeElementId).dispatchEvent(mouseupEvent);

      return;
    }

    // reset data of group token
    this.resetGroupToken();

    /* click word solution */
    if (this.isActiveInside(this.wordSolutions)) {
      // trigger click mousedown of diagnose-text-component (to  close group token)
      this.elementRef.nativeElement.dispatchEvent(mousedownEvent);
      // remove highLight
      this.highLightIds = new Set<string>();
      return;
    }

    /* Click change solution */
    if (this.isActiveInside(this.tokens)) {
      // find tokens which contain solution clicked
      const idx = this.tokens.findIndex((item) =>
        item.nativeElement.contains(
          document.getElementById(this.activeElementId)
        )
      );
      // focus when click onChange solution
      this.wordSolutions[idx].nativeElement.focus();

      return;
    }

    return;
  }

  eventEscapeKeycode() {
    // remove data
    if (this.isShowGroupToken) {
      const firstHighLight = this.highLightIds.values().next().value;
      this.resetGroupToken();
      this.elementRef.nativeElement.dispatchEvent(mousedownEvent);

      // focus the first word origin
      document.getElementById(firstHighLight).focus();
      return;
    }

    // close box-detail solution and close group-token
    if (
      this.isActiveInside(this.wordSolutions) ||
      this.isActiveInside(this.tokens)
    ) {
      // trigger event click outside solution of diagnose-text-component (to close box solution)
      this.elementRef.nativeElement.dispatchEvent(clickEvent);
      return;
    }

    return;
  }

  eventRightKeycode() {
    // For current active is wordOrigin
    if (this.isActiveInside(this.wordOriginals)) {
      const idx = this.wordOriginals.findIndex(
        (item) => item.nativeElement.id === this.activeElementId
      );

      if (idx === this.wordOriginals.length - 1) {
        return;
      }

      this.wordOriginals[idx + 1].nativeElement.focus();

      return;
    }

    // For current active is wordSolution
    if (this.isActiveInside(this.wordSolutions)) {
      const idx = this.wordSolutions.findIndex(
        (item) => item.nativeElement.id === this.activeElementId
      );

      if (idx === this.wordSolutions.length - 1) {
        return;
      }

      this.wordSolutions[idx + 1].nativeElement.focus();

      return;
    }

    return;
  }

  eventLeftKeycode() {
    // For current active is wordOrigin
    if (this.isActiveInside(this.wordOriginals)) {
      const idx = this.wordOriginals.findIndex(
        (item) => item.nativeElement.id === this.activeElementId
      );

      if (idx === 0) {
        return;
      }

      this.wordOriginals[idx - 1].nativeElement.focus();

      return;
    }

    // For current active is wordSolution
    if (this.isActiveInside(this.wordSolutions)) {
      const idx = this.wordSolutions.findIndex(
        (item) => item.nativeElement.id === this.activeElementId
      );

      if (idx === 0) {
        return;
      }

      this.wordSolutions[idx - 1].nativeElement.focus();

      return;
    }

    return;
  }

  eventDownKeycode() {
    if (this.isShowGroupToken) {
      // focus diagnose-button-search
      document.getElementById('diagnose-search-button').focus();
    }
  }

  // get activeElement
  get activeElementId() {
    return document.activeElement.id;
  }
}
