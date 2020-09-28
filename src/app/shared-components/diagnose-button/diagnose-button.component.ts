import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

const DIAGNOSE_URL = '/filter-quality/diagnose';

@Component({
  selector: 'mod-diagnose-button',
  templateUrl: './diagnose-button.component.html',
})
export class DiagnoseButtonComponent {
  @Input() minimized = false;
  @Input() keyWord: string;

  constructor(
    private router: Router,
    private location: Location,
    public activatedRoute: ActivatedRoute
  ) {}

  async onClick() {
    if (!this.keyWord || !this.keyWord.trim()) {
      return;
    }

    // encode keyword before put to the URL
    const keyWordEncoded = encodeURIComponent(this.keyWord);

    // If current page other than Diagnose page redirect to the Diagnose page with keyword params
    if (!this.isDiagnosePage) {
      return await this.router.navigate([DIAGNOSE_URL, keyWordEncoded]);
    }

    // Else append the keyword to the URL for feature keyword as params on url
    await this.router.navigate([`./${keyWordEncoded}`], {
      relativeTo: this.activatedRoute,
    });
  }

  get isDiagnosePage() {
    return this.location.path().startsWith(DIAGNOSE_URL);
  }
}
