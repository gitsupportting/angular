import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { has } from 'lodash';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Breadcrumb } from 'src/app/shared-components/breadcrumbs/breadcrumb.interface';

@Component({
  selector: 'mod-language-tasks-home-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class LanguageTasksHomeHeaderComponent implements OnInit {
  constructor() {}

  readonly breadcrumbs: Breadcrumb[] = [
    {
      label: 'Filter Quality',
      url: '/filter-quality',
    },
    {
      label: 'Language Tasks',
    },
  ];

  ngOnInit() {}
}
