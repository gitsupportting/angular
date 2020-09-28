import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'mod-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.less'],
  styles: [
    `
      .isActive {
        background-color: var(--toggle-bg-highlight);
      }

      .isActive .ball {
        background-color: var(--toggle-on-bg-highlight);
      }
    `,
  ],
})
export class ToggleComponent implements OnInit {
  @Input() defaultActive = false;
  @Input() label = '';
  @Input() labelClass = '';
  @Input() isDisabled = false;
  @Output() _onChanged = new EventEmitter<boolean>();

  ballWidth = 1.5; // rem
  ballWidthAsTailwind = this.ballWidth * 4;
  active = false;

  isActive: boolean;

  ngOnInit(): void {
    this.isActive = this.defaultActive;
  }

  onClick() {
    if (this.isDisabled) {
      return;
    }

    this.isActive = !this.isActive;
    this._onChanged.emit(this.isActive);
  }

  get ballActiveStyle() {
    return `left: calc(100% - ${this.ballWidth}rem)`;
  }
}
