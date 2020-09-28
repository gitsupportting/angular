import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TooltipComponent } from 'src/app/shared-components/tooltip/tooltip.component';
import { ComboBoxFilterPipe } from '../pipes';
import { AlternativesComponent } from './alternatives/alternatives.component';
import { AppGridComponent } from './app-grid/app-grid.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ComboBoxDirective } from './combo-box/combo-box-keyboard.directive';
import { ComboBoxComponent } from './combo-box/combo-box.component';
import { DiagnoseButtonComponent } from './diagnose-button/diagnose-button.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { EscalateButtonComponent } from './escalate-button/escalate-button.component';
import { ExampleListComponent } from './example-list/example-list.component';
import { ExampleComponent } from './example/example.component';
import { HighlightDirective } from './highlight-directive/highlight.directive';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { OptionButtonGroupComponent } from './option-button-group/option-button-group.component';
import { PaginationButtonsComponent } from './pagination-buttons/pagination-buttons.component';
import { PolicyGuideComponent } from './policy-guide/policy-guide.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressTabsComponent } from './progress-tabs/progress-tabs.component';
import { QueueItemTagsComponent } from './queue-item-tags/queue-item-tags.component';
import { QueueWrapperComponent } from './queue-wrapper/queue-wrapper.component';
import { OptionPrimaryComponent } from './select-box/options/option-primary/option-primary.component';
import { SelectBoxDirective } from './select-box/select-box/select-box-keyboard.directive';
import { SelectBoxComponent } from './select-box/select-box/select-box.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { TopicChipListComponent } from './topic-chip-list/topic-chip-list.component';
import { TopicChipComponent } from './topic-chip/topic-chip.component';
import { TopicPickRiskLevelComponent } from './topic-pick-risk-level/topic-pick-risk-level.component';

import { CommentButtonComponent } from './comment-button/comment-button.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CommentsPanelComponent } from './comments-panel/comments-panel.component';
import { DatePickerModule } from './datepicker';
import { SelectComponent } from './select/select.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TaskPickerComponent } from './task-picker/task-picker.component';
import { PaginationModule } from './pagination/pagination.module';
import { LanguageButtonGroupComponent } from './language-button-group/language-button-group.component';

import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [
    AlternativesComponent,
    AppGridComponent,
    BreadcrumbsComponent,
    ComboBoxComponent,
    ComboBoxDirective,
    ComboBoxFilterPipe,
    DiagnoseButtonComponent,
    DropdownMenuComponent,
    EscalateButtonComponent,
    ExampleComponent,
    ExampleListComponent,
    HighlightDirective,
    LoadingIndicatorComponent,
    OptionButtonGroupComponent,
    OptionPrimaryComponent,
    PaginationButtonsComponent,
    ProgressBarComponent,
    ProgressTabsComponent,
    QueueItemTagsComponent,
    QueueWrapperComponent,
    SelectBoxComponent,
    SelectBoxDirective,
    SidePanelComponent,
    TooltipComponent,
    TopicChipComponent,
    TopicChipListComponent,
    TopicPickRiskLevelComponent,
    CommentButtonComponent,
    CommentItemComponent,
    CommentsPanelComponent,
    SelectComponent,
    CheckboxComponent,
    TaskPickerComponent,
    LanguageButtonGroupComponent,
    PolicyGuideComponent,
    ToggleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DatePickerModule,
    PaginationModule,
  ],
  exports: [
    DatePickerModule,
    PaginationModule,
    AlternativesComponent,
    AppGridComponent,
    BreadcrumbsComponent,
    ComboBoxComponent,
    DiagnoseButtonComponent,
    DropdownMenuComponent,
    EscalateButtonComponent,
    ExampleComponent,
    ExampleListComponent,
    HighlightDirective,
    LoadingIndicatorComponent,
    OptionButtonGroupComponent,
    OptionPrimaryComponent,
    ProgressBarComponent,
    ProgressTabsComponent,
    QueueItemTagsComponent,
    QueueWrapperComponent,
    SelectBoxComponent,
    SidePanelComponent,
    TooltipComponent,
    TopicChipComponent,
    TopicChipListComponent,
    TopicPickRiskLevelComponent,
    CommentButtonComponent,
    CommentItemComponent,
    CommentsPanelComponent,
    SelectComponent,
    CheckboxComponent,
    TaskPickerComponent,
    LanguageButtonGroupComponent,
    PolicyGuideComponent,
    ToggleComponent,
  ],
})
export class SharedComponentsModule {}
