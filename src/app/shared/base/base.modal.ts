import { Injector, HostListener, OnInit } from '@angular/core';
import { AbstractSimpleBaseComponent } from './base-simple.component';
import { SidePanelData } from '../../shared-components/side-panel/side-panel.service';
import { ESCAPE_KEY_CODE } from 'src/constants';

export class AbstractModalComponent extends AbstractSimpleBaseComponent
  implements OnInit {
  sidePanelData: SidePanelData;
  @HostListener('document:keydown', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    if (this.sidePanelData.show && event.keyCode === ESCAPE_KEY_CODE) {
      this.sidePanelService.hide();
    }
  }

  constructor(readonly injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.rxSubscribe(
      this.sidePanelService.sidePanelObserable,
      (data: SidePanelData) => {
        this.sidePanelData = data;
      }
    );
  }
}
