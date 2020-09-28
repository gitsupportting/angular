import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeWhile, take } from 'rxjs/operators';
import { CreateRuleService } from '../create-rule.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'ftq-neighbouring-words',
  templateUrl: './neighbouring-words.component.html',
  styleUrls: ['./neighbouring-words.component.less'],
})
export class NeighbouringWordsComponent implements OnInit, OnDestroy {
  isAlive: boolean;
  inputText: string;
  startWords: string[];
  endWords: string[];
  loadingItem = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private createRuleService: CreateRuleService,
    private apiService: ApiService
  ) {
    this.isAlive = true;
  }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((params) => {
        if (params && params.text) {
          this.inputText = params.text;
          this.getNeighboringWords();
        } else {
          this.inputText = '';
        }
      });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  getNeighboringWords(): void {
    this.apiService
      .checkinNeighboringWords(this.inputText)
      .pipe(take(1))
      .subscribe((res) => {
        this.startWords = [];
        if (res.left) {
          res.left.map((el) => {
            if (el.text) {
              this.startWords.push(el.text);
            }
          });
        }
        this.endWords = [];
        if (res.right) {
          res.right.map((el) => {
            if (el.text) {
              this.endWords.push(el.text);
            }
          });
        }
        this.loadingItem = false;
      });
  }

  onNextButton(): void {
    this.createRuleService.navigateNextStep(this.route, this.inputText);
  }

  onOpenNewButton(): void {
    window.open(location.href, 'new copy' + new Date());
  }

  onAddStartWord(word: string): void {
    if (word && word !== '') {
      this.inputText = word + ' ' + this.inputText;
    }
    this.navigateWithUpdatedText();
  }

  onAddEndWord(word: string): void {
    if (word && word !== '') {
      this.inputText = this.inputText + ' ' + word;
    }
    this.navigateWithUpdatedText();
  }

  navigateWithUpdatedText(): void {
    this.router.navigate([location.pathname], {
      relativeTo: this.route,
      queryParams: {
        text: this.inputText,
      },
    });
  }
}
