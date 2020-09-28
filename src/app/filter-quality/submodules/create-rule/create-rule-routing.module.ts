import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRuleDashboardComponent } from './create-rule-dashboard/create-rule-dashboard.component';
import { FixSpellingComponent } from './fix-spelling/fix-spelling.component';
import { NeighbouringWordsComponent } from './neighbouring-words/neighbouring-words.component';
import { EnterTextComponent } from './enter-text/enter-text.component';

const routes: Routes = [
  {
    path: '',
    component: CreateRuleDashboardComponent,
    children: [
      {
        path: 'empty-rule',
        component: EnterTextComponent,
      },
      {
        path: 'fix-spelling',
        component: FixSpellingComponent,
      },
      {
        path: 'neighbouring-words',
        component: NeighbouringWordsComponent,
      },
      {
        path: 'smart-rules',
        component: FixSpellingComponent,
      },
      {
        path: 'add-topics',
        component: FixSpellingComponent,
      },
      {
        path: 'details',
        component: FixSpellingComponent,
      },
      {
        path: 'flags',
        component: FixSpellingComponent,
      },
      {
        path: 'discussion',
        component: FixSpellingComponent,
      },
      {
        path: 'test',
        component: FixSpellingComponent,
      },
      {
        path: '**',
        redirectTo: 'empty-rule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRuleRoutingModule {}
