import { Component } from '@angular/core';

import { IAppGridItem } from '../shared-components/app-grid/iapp-grid-item';

@Component({
  selector: 'ftq-filter-quality',
  templateUrl: './filter-quality.component.html',
})
export class FilterQualityComponent {
  public readonly apps: IAppGridItem[] = [
    {
      text: 'Moderation Log',
      icon: 'mdi-table',
      url: null,
    },
    {
      text: 'Audit Examples',
      icon: 'mdi-chat-processing-outline',
      url: '/filter-quality/audit-examples',
    },
    {
      text: 'Fix Spelling',
      icon: 'mdi-spellcheck',
      url: '/filter-quality/fix-spelling',
    },
    {
      text: 'Audit Usernames',
      icon: 'mdi-account-circle',
      url: '/filter-quality/audit-usernames',
    },
    {
      text: 'Audit Rules',
      icon: 'mdi-magnify',
      url: '/filter-quality/audit-rules',
    },
    {
      text: 'Measure Accuracy',
      icon: 'mdi-tune',
      url: null,
    },
    {
      text: 'Language Tasks',
      icon: 'mdi-translate',
      url: '/filter-quality/language-tasks',
    },
    {
      text: 'List Rules',
      icon: 'mdi-view-list',
      url: null,
    },
    {
      text: 'Publish Rules',
      icon: 'mdi-publish',
      url: null,
    },
    {
      text: 'Create New Rule',
      icon: 'mdi-pencil-plus',
      url: '/filter-quality/create-rule',
    },
  ];
}
