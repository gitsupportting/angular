import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeWhile, take } from 'rxjs/operators';
import { CreateRuleService } from '../create-rule.service';

interface Rule {
  class: string;
  value: string;
}

interface Spelling {
  class: string;
  description: string;
  name: string;
  active: boolean;
}
@Component({
  selector: 'ftq-fix-spelling',
  templateUrl: './fix-spelling.component.html',
  styleUrls: ['./fix-spelling.component.less'],
})
export class FixSpellingComponent implements OnInit, OnDestroy {
  @Input() set wordsArray(inputData: string[]) {
    if (!inputData) {
      return;
    }
  }

  isAlive: boolean;
  rule: string;
  inputText: string;
  checkLowerCase = true;
  checkSymbols = true;
  smartRule: Rule[];
  dontShowArray: string[] = [];
  smartSpelling: Spelling[] = [
    {
      class: 'p-2 text-risk-0',
      description:
        'The system automatically lowercases. Only use uppercase if it is a subversion like “you have a nice pASS”',
      name: 'Use lowercase',
      active: false,
    },
    {
      class: 'p-2 text-highlight-alt-5',
      description:
        'The system automatically removes them. You only need them for subversions like “go to he!!”',
      name: 'Skip Symbols',
      active: false,
    },
  ];
  beforeSpelling: string;
  ruleSelected: any[] = [];
  valid = false;
  blink = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private createRuleService: CreateRuleService
  ) {
    this.smartRule = [];
    this.isAlive = true;
  }

  ngOnInit(): void {
    this.rule = '';
    this.smartSpelling = [];
    this.route.queryParams.pipe(take(1)).subscribe((params) => {
      if (params && params.text) {
        this.inputText = params.text;
        if (this.inputText.match(/\p{Lu}/gu)) {
          this.dontShowArray.push('Use lowercase');
        }
        if (this.inputText.match(/\p{S}|\p{P}/gu)) {
          this.dontShowArray.push('Skip Symbols');
        }
      }
    });
    this.route.queryParams
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((params) => {
        if (params && params.text) {
          this.inputText = params.text;
          if (!this.beforeSpelling) {
            this.beforeSpelling = params.text.slice(0, params.text.length);
          }
          this.checkInputText();
        }
      });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  checkInputText(): void {
    this.smartSpelling = this.convertSpelling(this.inputText);
    let array = this.inputText.split(/[\s]/g);
    array = array.filter((el) => el !== '');
    this.smartRule = this.convertArray(array);
  }

  convertArray(array: string[]): Rule[] {
    const response = [];
    array.map((word) => {
      const lettersArray = Array.from(word);
      for (const letter of lettersArray) {
        if (letter.match(/\p{Lu}/gu) && this.checkLowerCase) {
          response.push({
            value: letter.toLocaleLowerCase(),
            class: 'text-risk-0',
          });
        } else {
          if (letter.match(/\p{S}|\p{P}/gu) && this.checkSymbols) {
            response.push({
              value: letter.toLocaleLowerCase(),
              class: 'text-highlight-alt-5',
            });
          } else {
            response.push({
              value: letter.toLocaleLowerCase(),
              class: 'text-color',
            });
          }
        }
      }
      response.push({
        value: ' ',
        class: 'text-color',
      });
    });
    this.validation();
    return response;
  }

  convertSpelling(inputText: string): Spelling[] {
    const result: Spelling[] = [];
    if (inputText.match(/\p{Lu}/gu) && this.checkLowerCase) {
      const spelling: Spelling = {
        class: 'p-2 text-risk-0',
        description:
          'The system automatically lowercases. Only use uppercase if it is a subversion like “you have a nice pASS”',
        name: 'Use lowercase',
        active: true,
      };
      result.push(spelling);
    } else {
      const spelling: Spelling = {
        class: 'p-2 text-risk-0',
        description:
          'The system automatically lowercases. Only use uppercase if it is a subversion like “you have a nice pASS”',
        name: 'Use lowercase',
        active: false,
      };
      result.push(spelling);
    }
    if (inputText.match(/\p{S}|\p{P}/gu) && this.checkSymbols) {
      const spelling: Spelling = {
        class: 'p-2 text-highlight-alt-5',
        description:
          'The system automatically removes them. You only need them for subversions like “go to he!!”',
        name: 'Skip Symbols',
        active: true,
      };
      result.push(spelling);
    } else {
      const spelling: Spelling = {
        class: 'p-2 text-highlight-alt-5',
        description:
          'The system automatically removes them. You only need them for subversions like “go to he!!”',
        name: 'Skip Symbols',
        active: false,
      };
      result.push(spelling);
    }
    this.validation();
    return result;
  }

  onAccept(spellingName: string): void {
    if (spellingName === 'Use lowercase') {
      this.checkLowerCase = true;
      this.inputText = this.inputText.toLowerCase();
    }
    if (spellingName === 'Skip Symbols') {
      this.checkSymbols = true;
      this.inputText = this.inputText.replace(/\p{S}|\p{P}/gu, '');
    }
    this.smartSpelling.map((el: Spelling) => {
      if (el.name === spellingName) {
        this.ruleSelected[spellingName] = 'accept';
      }
    });
    this.validation();
    this.navigate(this.inputText);
  }

  onReject(spellingName: string): void {
    this.inputText = this.beforeSpelling.slice(0, this.beforeSpelling.length);
    if (spellingName === 'Use lowercase') {
      this.checkLowerCase = false;
      this.smartSpelling.map((el) => {
        if (el.name === 'Use lowercase') {
          el.active = false;
        }
      });
    }
    if (spellingName === 'Skip Symbols') {
      this.checkSymbols = false;
      this.smartSpelling.map((el) => {
        if (el.name === 'Skip Symbols') {
          el.active = false;
        }
      });
    }
    this.smartSpelling.map((el: Spelling) => {
      if (el.name === spellingName) {
        this.ruleSelected[spellingName] = 'reject';
      }
    });
    this.textToLowerCase();
    this.skipSymbolsInText();
    this.checkInputText();
    this.validation();
  }

  textToLowerCase() {
    if (
      this.inputText.match(/\p{Lu}/gu) &&
      this.checkLowerCase &&
      this.ruleSelected['Use lowercase'] &&
      this.ruleSelected['Use lowercase'] === 'accept'
    ) {
      this.inputText = this.inputText.toLowerCase();
    }
    this.navigate(this.inputText);
  }

  skipSymbolsInText() {
    if (
      this.inputText.match(/\p{S}|\p{P}/gu) &&
      this.checkSymbols &&
      this.ruleSelected['Skip Symbols'] &&
      this.ruleSelected['Skip Symbols'] === 'accept'
    ) {
      this.inputText = this.inputText.replace(/\p{S}|\p{P}/gu, '');
    }
    this.navigate(this.inputText);
  }

  validation(): void {
    this.valid = true;
    this.smartSpelling.map((row) => {
      if (row.active) {
        this.valid = false;
      }
    });
    if (!this.inputText || this.inputText.trim() === '') {
      this.valid = false;
    }
  }

  onNextButton(): void {
    this.validation();
    if (!this.valid) {
      this.smartSpelling.map((row) => {
        if (row.active) {
          this.blink = true;
          setTimeout(this.removeBlink.bind(this, row.name), 4000);
        }
      });
    } else {
      this.createRuleService.navigateNextStep(this.route, this.inputText);
    }
  }

  removeBlink(id: string): void {
    this.blink = false;
  }

  navigate(text): void {
    this.router.navigate([location.pathname], {
      relativeTo: this.route,
      queryParams: {
        text: this.trim(text),
      },
    });
  }

  trim(text: string): string {
    if (!text) {
      return text;
    }
    text = text.trim();
    if (text.indexOf('  ') > -1) {
      return this.trim(text.replace('  ', ' '));
    } else {
      return text;
    }
  }
}
