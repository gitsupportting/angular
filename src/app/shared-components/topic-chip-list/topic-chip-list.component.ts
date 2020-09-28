import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ITopic, TopicSet } from '../interfaces';
import { Topics as TopicsList, PolicyGuide, Policy } from 'src/constants';

export type TopicView = 'EXPAND' | 'MINIMIZE' | 'EXPAND_POLICY_GUIDE';

const sortedTopicsList = Object.keys(TopicsList)
  .filter((key) => key !== '0')
  // Sort alphabetically with custom at the end
  .sort((prev, curr) => {
    const prevName = TopicsList[prev].name.toUpperCase();
    const currName = TopicsList[curr].name.toUpperCase();
    const isCustomRe = /^CUSTOM\d$/;

    if (isCustomRe.test(prevName) && !isCustomRe.test(currName)) {
      return 1;
    } else if (!isCustomRe.test(prevName) && isCustomRe.test(currName)) {
      return -1;
    }

    if (currName < prevName) {
      return 1;
    } else if (currName > prevName) {
      return -1;
    } else {
      return 0;
    }
  })
  .map((key: string) => {
    const topicId = parseInt(key, 10);
    return {
      id: topicId,
      name: TopicsList[topicId].name,
      icon: TopicsList[topicId].icon,
    };
  });

@Component({
  selector: 'mod-topic-chip-list',
  templateUrl: './topic-chip-list.component.html',
})
export class TopicChipListComponent implements OnInit {
  private _topics: ITopic[];

  @Input() showProjectedContent = true;
  @Input() readOnly = false;
  @Input() minimized = false;
  @Input()
  set topics(topics: ITopic[]) {
    this._topics = topics;
  }
  get topics() {
    return this._topics;
  }

  @Output() updated = new EventEmitter<ITopic[]>();

  /* input for case topics has 3 options: 'EXPAND' | 'MINIMIZE' | 'EXPAND_POLICY_GUIDE' */
  _topicView: TopicView = 'EXPAND';
  @Input() set topicView(view: TopicView) {
    this._topicView = view;
    view === 'EXPAND' && (this.minimized = false);
    view === 'MINIMIZE' && (this.minimized = true);
  }
  get topicView() {
    return this._topicView;
  }
  @Input() policyGuides: Array<PolicyGuide>;
  policies: Array<Policy>;

  ngOnInit() {
    // get policy data
    if (this.policyGuides) {
      this.policies = this.handlePolicies(this.topics, this.policyGuides);
    }
  }

  handlePolicies(topics: ITopic[], policyGuides: Array<PolicyGuide>) {
    // get array policies
    const policies: Array<Policy> = policyGuides.map((policyGuide) => {
      let isSafe = true;

      // check a policy is safe
      for (const rule of policyGuide.rules) {
        const { topic, riskThreshold } = rule;

        // find rule's topic in topics
        const topicMatched = topics.find((topicItem) => topicItem.id === topic);

        // set a policyGuide isSafe when topics and policyGuide contains the same topic
        if (topicMatched && topicMatched.risk >= riskThreshold) {
          isSafe = false;
          break;
        }
      }

      return { isSafe, policyGuide };
    });

    return policies;
  }

  get generalTopic() {
    if (this.topics.length && this.topics[0].id === 0) {
      return this.topics[0];
    }
  }

  get additionalTopics() {
    if (this.generalTopic) return this.topics.slice(1);
    else return this.topics;
  }

  get currentTopicIds() {
    return this._topics.map((topic) => topic.id);
  }

  get topicsList() {
    return sortedTopicsList.map((topic) => {
      return {
        ...topic,
        checked: this.currentTopicIds.includes(topic.id),
      };
    });
  }

  trackById(_, { id }) {
    return id;
  }

  onTopicChanged(topicId: number, checked: boolean) {
    if (checked) {
      const topics = this._topics.slice();
      topics.push({ id: topicId, risk: 4 });
      this.updated.emit(topics);
    } else {
      this.removeTopic(topicId);
    }
  }

  onRemoved(topic: ITopic) {
    this.removeTopic(topic.id);
  }

  /**
   * Fired when the user selects a new risk level for a given topic
   * @param topic The topic risk change event
   */
  onRiskChanged(topic: ITopic) {
    const topics = this._topics.slice();
    const topicIndex = topics.findIndex(({ id }) => id === topic.id);
    topics[topicIndex] = {
      id: topic.id,
      risk: topic.risk,
    };
    this.updated.emit(topics);
  }

  private removeTopic(topicId: number) {
    const topics = this._topics.slice();
    const topicIndex = topics.findIndex(({ id }) => id === topicId);
    if (topicIndex > 0) {
      topics.splice(topicIndex, 1);
      this.updated.emit(topics);
    }
  }
}
