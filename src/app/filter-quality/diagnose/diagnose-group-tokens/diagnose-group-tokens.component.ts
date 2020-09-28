import { Component, Input, OnInit } from '@angular/core';
import { DEFAULT_TEXT_SIZE, MERGE_TOKEN_BOX_MINWIDTH } from 'src/constants';
import { Word } from '../diagnose-text/diagnose-text.component';

export interface DiagnoseInputData {
  items?: Array<number>;
  textOrigin?: Array<Word>;
  width?: number;
  styles?: object;
  isLoad?: boolean;
}

@Component({
  selector: 'ftq-diagnose-group-tokens',
  templateUrl: './diagnose-group-tokens.component.html',
})
export class DiagnoseGroupTokensComponent implements OnInit {
  _data: DiagnoseInputData;
  @Input() set data(data: DiagnoseInputData) {
    this._data = data;
    // change searchText
    this.setSearchText();
  }
  get data() {
    return this._data;
  }
  width: any;
  searchText: string;
  breadCrumText: string;
  fontSizeRoot: number = DEFAULT_TEXT_SIZE;

  ngOnInit(): void {
    this.setSearchText();
  }

  setSearchText() {
    const { textOrigin, items } = this.data;
    // array highlight text
    const searchTextAsArray = items.map(
      (wordIndex) => textOrigin[wordIndex].solution
    );

    this.searchText = searchTextAsArray.join(' ');
  }

  get groupTokenWidth() {
    this.data.width = Math.max(MERGE_TOKEN_BOX_MINWIDTH, this.data?.width || 0);
    return this.data.width / this.fontSizeRoot;
  }
}
