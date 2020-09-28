import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'ftq-progress-tabs',
  templateUrl: './progress-tabs.component.html',
  styleUrls: ['./progress-tabs.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressTabsComponent {
  @Input() inputArray: string[];
  @Input() sequential = true;
  @Input() set activeStep(data: number | string) {
    data = +data;
    this.step = !data || data < 0 ? 0 : data;
  }
  @Output() navigate: EventEmitter<number> = new EventEmitter(null);

  step: number;

  onNavigate(step: number): void {
    if (step < this.step || !this.sequential) {
      this.navigate.next(step);
    }
  }
}
