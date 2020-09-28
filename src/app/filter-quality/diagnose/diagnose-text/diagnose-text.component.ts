import {
  AfterViewInit,
  Component,
  ElementRef,
  Injector,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Rule, Slots } from 'classify-text-swagger-client';
import { flatten } from 'lodash';
import { fromEvent, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/shared/services/storage/local-storage.service';
import {
  DEFAULT_TEXT_SIZE,
  GENERAL_RISK,
  MERGE_TOKEN_BOX_MINWIDTH,
} from 'src/constants';
import { AbstractSimpleBaseComponent } from '../../../shared/base/base-simple.component';
import { DiagnoseInputData } from '../diagnose-group-tokens/diagnose-group-tokens.component';

@Component({
  selector: 'ftq-diagnose-text',
  templateUrl: './diagnose-text.component.html',
  styleUrls: ['./diagnose-text.component.less'],
})
export class DiagnoseTextComponent extends AbstractSimpleBaseComponent
  implements OnInit, AfterViewInit {
  @ViewChild('diagnoseTextView') diagnoseTextView: ElementRef;
  @ViewChildren('tokenList') arrayTokenList: QueryList<ElementRef>;
  @ViewChild('diagnoseGroupToken', { read: ElementRef })
  diagnoseGroupToken: ElementRef;
  @ViewChildren('fragment') fragmentList: QueryList<ElementRef>;
  @Input() extended: Array<Slots>;
  wordDiagnosed: Array<Word> | any;
  GENERAL_RISK = GENERAL_RISK;

  // GROUP TOKEN
  activeSolution = {};
  data: DiagnoseInputData;
  highLightData = {
    selected: {}, // to add class to box origin
    isClick: false, // check mouse is clicked and holding
    items: new Set<number>(), // collection key selected
    selectedOriginals: {}, // to show view group-token component here
    isShowViewDialog: false, // to add class to <div>text-box</div>
  };
  @Input() keyboardId: string;

  constructor(
    readonly injector: Injector,
    private readonly localStorageSerivce: LocalStorageService,
    private renderer: Renderer2
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.wordDiagnosed = this.handleGroupWord(this.extended);

    // check event mouseup outside this component
    this.renderer.listen('document', 'mouseup', (e: Event) => {
      if (!this.diagnoseTextView.nativeElement.contains(e.target)) {
        this.eventMouseup();
      }
    });

    // check event click outside list button solution
    this.renderer.listen('document', 'click', (e: Event) => {
      // check click outside solution list box
      const clickedInside = this.fragmentList
        .toArray()
        .some((item) => item.nativeElement.contains(e.target));
      if (!clickedInside) {
        this.activeSolution = {};
      }
    });

    // check mouse down outside group token
    this.renderer.listen('document', 'mousedown', (e: Event) => {
      // check click outside group token component
      if (
        this.diagnoseGroupToken &&
        !this.diagnoseGroupToken.nativeElement.contains(e.target)
      ) {
        if (this.highLightData.isShowViewDialog) {
          this.highLightData = {
            selectedOriginals: {},
            selected: {},
            isClick: false,
            items: new Set<number>(),
            isShowViewDialog: false,
          };
        }
      }
    });
  }

  ngAfterViewInit() {
    // fire update the suitable UI position
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
    // store the right coordinates of DiagnoseText Component
    const diagnoseTextRightCoor = this.diagnoseTextView.nativeElement.getBoundingClientRect()
      .right;

    // add some css for the tokenList when tokenList exceeds the DiagnoseText Component area
    this.arrayTokenList.toArray().forEach((tokenList) => {
      const nativeElement = tokenList.nativeElement;
      const style =
        nativeElement.getBoundingClientRect().right > diagnoseTextRightCoor
          ? { right: 0, left: 'auto' }
          : { left: 0, right: 'auto' };
      Object.assign(nativeElement.style, style);
    });

    // hide the active solution
    this.activeSolution = {};
  }

  /* Note:
   * + The rule we're using to group 2 or many word is the
   *   [text] property will be empty when it was used on the prev token
   * + We need to group [original] & tokens
   */
  handleGroupWord(extended: Array<Slots>): Array<Word> {
    const dataGrouped = extended.reduce((memo, slot, index) => {
      const { solution, original, tokens } = slot;

      /* push first word to memo */
      if (index === 0) {
        // push word to memo
        const word = this.wordFromSlot(slot);
        memo.push(word);
        return memo;
      }

      // start the checking previous slot from index = 1
      let previousWord = memo[memo.length - 1];
      let { original: prevOriginal, tokens: prevTokens } = previousWord;

      /* push the word do not satisfy the rule to memo */
      if (solution !== previousWord.solution) {
        const word = this.wordFromSlot(slot);
        memo.push(word);
        return memo;
      }

      /* handle the satisfy word */
      // append the current original text to the previous one
      prevOriginal = `${prevOriginal} ${original}`;

      // merge tokens
      prevTokens = this.mergeTokens(prevTokens, tokens);

      // update slot data to memo
      previousWord = Object.assign(previousWord, {
        original: prevOriginal,
        tokens: prevTokens,
      });

      return memo;
    }, []);

    return dataGrouped;
  }

  /*
   * Handle [slot] data to set some properties like color, topics...
   * Note: The color we're using get by trisk level of general-risk
   */
  wordFromSlot(slot: Slots): Word {
    const { solution, original, tokens } = slot;
    const chosenToken = tokens.find((token) => token.text === solution);
    const level = chosenToken.topics[GENERAL_RISK];

    // Note: Reverse array to show the grouping at the top. Need to confirm
    // const tokensReverse = tokens.reverse();
    const filterToken = this.mergeTokens(tokens);

    return { solution, original, level, tokens: filterToken };
  }

  /*
   * Merge tokens which have dulpicate [text] property
   */
  mergeTokens(...tokens: Array<Array<Rule>>): Array<Rule> {
    const tokenFlated = flatten(tokens);
    const mapTextToken = tokenFlated.reduce((memo, slot) => {
      if (!memo[slot.text]) {
        memo[slot.text] = slot;
      }

      return memo;
    }, {});

    return Object.values(mapTextToken);
  }

  // Change Token
  onChangeToken(wordIndex: number, rule: Rule) {
    const currentWord = this.wordDiagnosed[wordIndex];

    // update the text and general risk level to current slot word
    Object.assign(currentWord, {
      solution: rule.text,
      level: rule.topics[GENERAL_RISK],
    });
  }

  preventDefault(ev) {
    ev.preventDefault();
  }

  eventMouseDown(ev, key: number) {
    this.preventDefault(ev);

    // hide detail_box
    this.activeSolution = {};

    // set data highlight
    this.highLightData = {
      selectedOriginals: {},
      selected: {},
      isClick: true,
      items: new Set<number>(),
      isShowViewDialog: false,
    };
    this.highLightData.selected[key] = true;
    this.highLightData.items.add(key);
  }

  eventMouseover(key: number) {
    if (!isNaN(key)) {
      if (this.highLightData.isClick) {
        this.highLightData.items.add(key);
        this.highLightData.selected[key] = true;
      }
    }
  }

  eventMouseup() {
    if (!this.highLightData.items.size) {
      return;
    }

    this.highLightData.isClick = false;
    // sort selected item here
    const sortedSelect: Array<number> = [...this.highLightData.items].sort(
      (a, b) => {
        return a - b;
      }
    );
    const start = Math.min(...sortedSelect);
    // sort items
    this.highLightData.items = new Set<number>();
    for (const item of sortedSelect) {
      this.highLightData.items.add(item);
    }
    // show template
    this.highLightData.selectedOriginals[start] = true;
    this.highLightData.isShowViewDialog = true;
    // pass data to component
    this.pasDataToHighLightComponent(sortedSelect);
  }

  pasDataToHighLightComponent(arr = []) {
    const start = Math.min(...arr);
    const end = Math.max(...arr);

    // Set the suitable position for merge-token-box
    const rectDiagnoseText = this.diagnoseTextView.nativeElement.getBoundingClientRect();
    const solutionBoxList = this.fragmentList.toArray();
    const rectStart = solutionBoxList[
      start
    ].nativeElement.getBoundingClientRect();
    const rectEnd = solutionBoxList[end].nativeElement.getBoundingClientRect();

    const data = {
      items: arr,
      textOrigin: this.wordDiagnosed,
      width: rectEnd?.right - rectStart?.left,
    };

    // calculate mergeTokenBoxMinWidthmergeTokenBoxMinWidth by ratio MERGE_TOKEN_BOX_MINWIDTH / default font size
    const textSize =
      this.localStorageSerivce.getItem('textSize') || DEFAULT_TEXT_SIZE;
    const mergeTokenBoxMinWidth =
      (MERGE_TOKEN_BOX_MINWIDTH / DEFAULT_TEXT_SIZE) * textSize;

    /*
     * set left = 0 when we have the right space for the merge-token-box
     */
    if (
      Math.abs(rectDiagnoseText?.right - rectStart?.left) >
      mergeTokenBoxMinWidth
    ) {
      this.data = Object.assign(data, { styles: { left: 0 } });

      return;
    }

    /*
     * set right = 0 when we have the left space for the merge-token-box
     */
    if (
      Math.abs(rectDiagnoseText?.left - rectStart?.right) >
      mergeTokenBoxMinWidth
    ) {
      this.data = Object.assign(data, { styles: { right: 0 } });

      return;
    }

    /*
     * set the vertical middle position for merge-token-box
     * Todo: if the merge-token-box have the width greater than the diagnose-text component. Let refactor this function
     */
    // calculate the left distance from merge-token-box to parent when it's in the middle vertical
    const leftDistance =
      rectDiagnoseText?.left +
      rectDiagnoseText?.width / 2 -
      rectStart?.left -
      mergeTokenBoxMinWidth / 2;
    this.data = Object.assign(data, {
      styles: { left: leftDistance + 'px' },
    });
  }

  onClickSolution(key: number, check: boolean) {
    this.activeSolution = {};
    this.activeSolution[key] = !check ? true : false;
  }

  eventTouchPan(evt) {
    // get element from touch point coordinate
    const element = document.elementFromPoint(evt.center.x, evt.center.y);

    if (this.diagnoseTextView.nativeElement.contains(element)) {
      // if element inside this diagnose text component, get index and add call Mouseover event
      const id = element?.getAttribute('data-idx');
      id && this.eventMouseover(parseInt(id));
    }
  }
}

export interface Word {
  original: string;
  solution: string;
  level: any;
  tokens: Array<Rule>;
}
