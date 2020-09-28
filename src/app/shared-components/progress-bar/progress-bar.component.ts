import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mod-progress-bar',
  templateUrl: './progress-bar.component.html',
})
export class ProgressBarComponent implements OnInit {
  @Input() label: string;
  @Input() value: number;
  percent = '0';

  ngOnInit(): void {
    setTimeout(() => {
      this.percent = Math.round(this.value * 100) + '%';
    }, 400);
  }
}
