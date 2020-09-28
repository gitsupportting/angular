import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterQualityComponent } from './filter-quality.component';
import { ExamplesQueueComponent } from './examples-queue/examples-queue.component';
import { RulesAuditQueueComponent } from './rules-audit-queue/rules-audit-queue.component';
import { UsernamesQueueComponent } from './usernames-queue/usernames-queue.component';
import { FixSpellingComponent } from './fix-spelling/fix-spelling.component';

const routes: Routes = [
  {
    path: '',
    component: FilterQualityComponent,
    // data: { breadcrumb: 'Filter Quality' },
  },
  {
    path: 'audit-examples',
    component: ExamplesQueueComponent,
    data: {
      breadcrumb: 'Audit Examples',
    },
  },
  {
    path: 'audit-rules',
    component: RulesAuditQueueComponent,
    data: {
      breadcrumb: 'Audit Rules',
    },
  },
  {
    path: 'audit-usernames',
    component: UsernamesQueueComponent,
    data: {
      breadcrumb: 'Audit Usernames',
    },
  },
  {
    path: 'create-rule',
    loadChildren: () =>
      import('./submodules/create-rule/create-rule.module').then(
        (m) => m.CreateRuleModule
      ),
    data: {
      breadcrumb: 'Create New Rule',
    },
  },
  {
    path: 'language-tasks',
    loadChildren: () =>
      import('./language-tasks/language-tasks.module').then(
        (m) => m.LanguageTasksModule
      ),
    data: {
      breadcrumb: 'Diagnose',
    },
  },
  {
    path: 'diagnose',
    loadChildren: () =>
      import('./diagnose/diagnose.module').then((m) => m.DiagnoseModule),
    data: {
      breadcrumb: 'Diagnose',
    },
  },
  {
    path: 'fix-spelling',
    component: FixSpellingComponent,
    data: {
      breadcrumb: 'Fix Spelling',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterQualityRoutingModule {}
