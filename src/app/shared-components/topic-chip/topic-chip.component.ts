import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

import { ITopic } from '../interfaces';
import { Topics } from '../../../constants';

@Component({
  selector: 'mod-topic-chip',
  templateUrl: './topic-chip.component.html',
  host: {
    class: 'inline-flex',
  },
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ overflow: 'hidden', width: 0 }),
        animate('100ms ease-in', style({ width: '100%' })),
      ]),
      transition(':leave', [animate('100ms ease-in', style({ width: 0 }))]),
    ]),
  ],
})
export class TopicChipComponent implements OnInit {
  @Input() readOnly = false;
  @Input() minimized = false;
  @Input() type: 'default' | 'secondary' = 'default';
  @Input()
  get topic() {
    return this._topic;
  }
  set topic(value: ITopic) {
    this._topic = value;
    this.topicName = Topics[value.id].name;
    this.topicIcon = Topics[value.id].icon;
  }

  @Input()
  get minRisk() {
    return this._minRisk;
  }
  set minRisk(value: number) {
    this._minRisk = Math.max(value, 0);
    this.updateRisks();
  }

  @Input()
  get maxRisk() {
    return this._maxRisk;
  }
  set maxRisk(value: number) {
    this._maxRisk = Math.max(value, this.minRisk);
    this.updateRisks();
  }

  @Output() removed = new EventEmitter<ITopic>();
  @Output() riskChanged = new EventEmitter<ITopic>();

  topicName = '';
  topicIcon = '';

  editing = false;
  risks = [0, 1, 2, 3, 4, 5, 6, 7];

  private _minRisk = 0;
  private _maxRisk = 7;
  private _topic: ITopic;

  ngOnInit() {
    this.editing = !this.readOnly && this.topic.risk === 4;
  }

  /**
   * Fired when the user clicks the delete button on a topic
   */
  removeTopic() {
    this.removed.emit(this.topic);
  }

  setTopicRisk(risk: number) {
    this.riskChanged.emit({
      id: this.topic.id,
      risk,
    });
    this.editing = false;
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

  private updateRisks() {
    this.risks = [];
    for (let i = this.minRisk; i <= this.maxRisk; i++) {
      this.risks.push(i);
    }
  }
}
