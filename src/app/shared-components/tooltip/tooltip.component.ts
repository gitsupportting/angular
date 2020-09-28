import { Component, Input } from '@angular/core';

@Component({
  selector: 'mod-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.less'],
})
export class TooltipComponent {
  @Input() text = '';
}
