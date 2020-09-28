import { BaseQueueComponent } from 'src/app/base-queue/base-queue.component';
import {
  BaseQueueService,
  QUEUE_NAME,
} from 'src/app/base-queue/base-queue.service';
import { Component } from '@angular/core';
import { Breadcrumb } from 'src/app/shared-components/breadcrumbs/breadcrumb.interface';
import { AuditRulesItemData } from './audit-rules-item-data.interface';

@Component({
  selector: 'ftq-rules-audit-queue',
  templateUrl: './rules-audit-queue.component.html',
  host: {
    class: 'w-full',
  },
  providers: [
    { provide: QUEUE_NAME, useValue: 'rulesAudit' },
    BaseQueueService,
  ],
})
export class RulesAuditQueueComponent extends BaseQueueComponent<
  AuditRulesItemData
> {
  readonly breadcrumbs: Breadcrumb[] = [
    {
      label: 'Filter Quality',
      url: '/filter-quality',
    },
    {
      label: 'Audit Rules',
    },
  ];
}
