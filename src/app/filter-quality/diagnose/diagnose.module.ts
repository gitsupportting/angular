import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainModule } from 'src/app/main/main.module';
import { RightUnderscorePipe, RiskLevelToColorPipe } from 'src/app/pipes';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { DiagnoseGroupTokensComponent } from './diagnose-group-tokens/diagnose-group-tokens.component';
import { DiagnoseRoutingModule } from './diagnose-routing.module';
import { DiagnoseTextComponent } from './diagnose-text/diagnose-text.component';
import { DiagnoseComponent } from './diagnose.component';
import { PolicyGuideComponent } from './policy-guide/policy-guide.component';
import { ModGroupTokenDirective } from './group-token-keyboard.directive';

@NgModule({
  declarations: [
    DiagnoseComponent,
    PolicyGuideComponent,
    RightUnderscorePipe,
    RiskLevelToColorPipe,
    DiagnoseTextComponent,
    DiagnoseGroupTokensComponent,
    ModGroupTokenDirective,
  ],
  imports: [
    CommonModule,
    DiagnoseRoutingModule,
    SharedComponentsModule,
    MainModule,
  ],
})
export class DiagnoseModule {}
