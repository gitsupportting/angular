import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Breadcrumb } from './breadcrumb.interface';

@Component({
  selector: 'mod-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [':host { display: block; }'],
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: Breadcrumb[] = [];

  @ViewChild('copyInput') copyInput: ElementRef;

  handleCopyUrl() {
    this.copyInput.nativeElement.type = 'text';
    this.copyInput.nativeElement.value = window.location.href;
    this.copyInput.nativeElement.select();
    document.execCommand('copy');
    this.copyInput.nativeElement.type = 'hidden';
  }
}
