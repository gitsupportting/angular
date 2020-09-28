import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RiskLevels, Topics } from '../../../constants';
import { ITopic, TopicSet } from '../interfaces';

interface DisplayTopic extends ITopic {
  name: string;
  icon: string;
}

@Component({
  selector: 'mod-topic-pick-risk-level',
  templateUrl: './topic-pick-risk-level.component.html',
  styleUrls: ['./topic-pick-risk-level.component.less'],
})
export class TopicPickRiskLevelComponent {
  private _topics: DisplayTopic[];
  @Input() set topics(topics: ITopic[]) {
    this._topics = topics.map((topic) => {
      const { name, icon } = Topics[topic.id];
      return {
        ...topic,
        name,
        icon,
      };
    });
    this.updateHighLightTopic();
  }
  get topics() {
    return this._topics;
  }
  @Input() readonly = false; // default: can change level of risk
  @Input() originTopics: DisplayTopic[];
  @Output() changeRiskLevel = new EventEmitter<TopicSet>();
  highlightTopics: TopicSet = {}; // to check selected risk of each topic
  risks = RiskLevels;

  updateHighLightTopic() {
    for (const item of this.topics) {
      if (!this.highlightTopics[item.id]) {
        this.highlightTopics[item.id] = item.risk;
      }
    }

    for (const [key] of Object.entries(this.highlightTopics)) {
      if (!this.topics.some((ele) => ele.id == +key)) {
        delete this.highlightTopics[key];
      }
    }
  }

  isChangedOriginLevel(level: number, topic: DisplayTopic) {
    const origin = this.originTopics?.find(
      (item) => item['id'] == +topic['id']
    );
    if (origin) {
      return (
        level == origin['risk'] &&
        this.highlightTopics[topic.id] != origin['risk']
      );
    }

    return false;
  }

  onChangeLevel(topicId: number, riskId: number) {
    this.highlightTopics[topicId] = riskId;
    this.changeRiskLevel.emit({ [topicId]: +riskId });
  }

  getRiskClasses(topic, level) {
    const baseClass = `hover:bg-risk-${level.key}`;
    return topic.risk == level.key ||
      this.highlightTopics[topic.id] == level.key
      ? `bg-risk-${level.key} ${baseClass} text-on-active`
      : baseClass;
  }
}
