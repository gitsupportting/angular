import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { has } from 'lodash';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Breadcrumb } from 'src/app/shared-components/breadcrumbs/breadcrumb.interface';

@Component({
  selector: 'mod-language-tasks-details-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class LanguageTasksDetailsHeaderComponent implements OnInit {
  @Input() pageType: number;
  @Output() taskActionEvent = new EventEmitter<number>();

  breadcrumbs: Breadcrumb[] = [
    {
      label: 'Filter Quality',
      url: '/filter-quality',
    },
    {
      label: 'Language Tasks',
      url: '/filter-quality/language-tasks',
    },
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    switch (this.pageType) {
      case 0:
        this.breadcrumbs.push({
          label: 'Details',
        });
        break;
      case 1:
        this.breadcrumbs.push({
          label: 'Edit',
        });
        break;
      case 2:
        this.breadcrumbs.push({
          label: 'Create',
        });
        break;
      default:
        this.breadcrumbs.push({
          label: 'Details',
        });
    }
  }

  editTask(): void {
    this.pageType = 1;
    this.breadcrumbs[2] = {
      label: 'Edit',
    };
    this.taskActionEvent.emit(this.pageType);
  }

  createTask(): void {
    this.pageType = 2;
    this.breadcrumbs[2] = {
      label: 'Create',
    };
    this.taskActionEvent.emit(this.pageType);
  }
}
