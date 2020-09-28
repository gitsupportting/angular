import { Component, Input } from '@angular/core';
import { SidePanelService } from '../side-panel/side-panel.service';
import { EscalateData } from 'src/app/filter-quality/diagnose/diagnose.component';

@Component({
  selector: 'mod-escalate-button',
  templateUrl: './escalate-button.component.html',
})
export class EscalateButtonComponent {
  @Input() key: string; // escalate side-panel key
  @Input() data: EscalateData;
  @Input() buttonClass: string;

  constructor(private sidePanelService: SidePanelService) {}

  onClick() {
    this.sidePanelService.show({
      key: this.key,
      data: this.data,
    });
  }
}
