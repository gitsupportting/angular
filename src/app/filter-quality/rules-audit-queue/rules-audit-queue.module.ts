import { NgModule } from '@angular/core';
import { RulesAuditQueueComponent } from './rules-audit-queue.component';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

@NgModule({
  declarations: [RulesAuditQueueComponent],
  imports: [CommonModule, SharedComponentsModule],
  exports: [RulesAuditQueueComponent],
})
export class RulesAuditQueueModule {}
