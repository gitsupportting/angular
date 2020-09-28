import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExamplesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ExamplesRoutingModule,
    SharedComponentsModule,
  ],
})
export class ExamplesModule {}
