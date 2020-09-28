import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRuleDashboardComponent } from './create-rule-dashboard/create-rule-dashboard.component';
import { CreateRuleRoutingModule } from './create-rule-routing.module';
import { FixSpellingComponent } from './fix-spelling/fix-spelling.component';
import { EnterTextComponent } from './enter-text/enter-text.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NeighbouringWordsComponent } from './neighbouring-words/neighbouring-words.component';
import { CreateRuleService } from './create-rule.service';

@NgModule({
  declarations: [
    CreateRuleDashboardComponent,
    FixSpellingComponent,
    NeighbouringWordsComponent,
    EnterTextComponent,
  ],
  imports: [
    CommonModule,
    CreateRuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
  ],
  providers: [CreateRuleService],
})
export class CreateRuleModule {}
