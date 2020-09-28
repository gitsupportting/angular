import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiagnoseService } from 'src/app/filter-quality/diagnose/diagnose.service';

const ENTER_KEY_CODE = 13;
const DIAGNOSE_URL = '/filter-quality/diagnose';

@Component({
  selector: 'main-search',
  templateUrl: './search.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class SearchComponent implements OnInit {
  keyWord = '';

  constructor(
    private router: Router,
    private diagnoseService: DiagnoseService
  ) {}

  ngOnInit(): void {
    // update the keyWord from diagnose service
    this.diagnoseService.keyWordFromUrl.subscribe(
      (newKeyWord) => (this.keyWord = newKeyWord)
    );
  }

  // binding Enter press to onSearch()
  onKey($event) {
    if ($event.keyCode === ENTER_KEY_CODE && this.keyWord.trim()) {
      this.onSearch();
    }
  }

  onSearch() {
    const keyWord = this.keyWord.trim();

    // encode keyword before put it to the URL
    const keyWordEncoded = this.diagnoseService.encodeKeyWord(keyWord);
    this.router.navigate([`${DIAGNOSE_URL}/${keyWordEncoded}`]);
  }
}
