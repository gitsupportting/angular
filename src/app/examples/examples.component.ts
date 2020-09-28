/* eslint-disable @typescript-eslint/member-ordering */
import { CommentsPanelService } from '../shared-components/comments-panel/comments-panel.service';
import { Component, OnInit } from '@angular/core';
import { findIndex } from 'lodash';
import { IOptionButton } from '../shared-components/option-button-group/option-button-group.component';
import { ITopic, TopicSet } from '../shared-components/interfaces';
import { TaskOutputItems, CommentDetails } from 'language-tasks-swagger-client';
import {
  Topics,
  TOPIC_RISK_DEFAULT,
  Languages,
  PolicyGuide,
} from 'src/constants';
import { TopicView } from '../shared-components/topic-chip-list/topic-chip-list.component';
import moment from 'moment';
import {
  IDatePickerConfig,
  ECalendarValue,
} from '../shared-components/datepicker';

const DEF_CONF: IDatePickerConfig = {
  firstDayOfWeek: 'su',
  monthFormat: 'MMM, YYYY',
  disableKeypress: false,
  allowMultiSelect: false,
  closeOnSelect: undefined,
  closeOnSelectDelay: 100,
  openOnFocus: true,
  openOnClick: true,
  onOpenDelay: 0,
  closeOnEnter: true,
  weekDayFormat: 'ddd',
  appendTo: document.body,
  showNearMonthDays: true,
  showWeekNumbers: false,
  enableMonthSelector: true,
  yearFormat: 'YYYY',
  showGoToCurrent: true,
  dayBtnFormat: 'DD',
  monthBtnFormat: 'MMM',
  hours12Format: 'hh',
  hours24Format: 'HH',
  meridiemFormat: 'A',
  minutesFormat: 'mm',
  minutesInterval: 1,
  secondsFormat: 'ss',
  secondsInterval: 1,
  showSeconds: false, //
  showTwentyFourHours: false, //
  timeSeparator: ':',
  multipleYearsNavigateBy: 10,
  showMultipleYearsNavigation: true, //
  locale: moment.locale(),
  hideInputContainer: false,
  returnedValueType: ECalendarValue.String,
  unSelectOnClick: true,
  hideOnOutsideClick: true,
  numOfMonthRows: 3,
};

@Component({
  selector: 'ftq-examples',
  templateUrl: './examples.component.html',
})
export class ExamplesComponent implements OnInit {
  /*
   * Escalate Button Data
   */
  escalateData = {
    topics: [
      { id: 4, risk: 7 },
      { id: 6, risk: 7 },
    ] as ITopic[],
    textSearch: 'Escalate button example',
  };

  /*
   * SelectBox Component
   */
  selectBoxTopics = [
    { id: 3, risk: 2 },
    { id: 5, risk: 1 },
  ].map(({ id, risk }) => {
    const { name, icon } = Topics[id];
    return { id, risk, name, icon };
  });
  originTopics = this.selectBoxTopics;
  topicAll = Object.entries(Topics).map(([index, topic]) => {
    return { ...topic, id: index };
  });
  highlightTopics: { [topicId: number]: number } = {}; // to check selected risk of each topic
  activeTopics: { [topicId: number]: boolean } = {}; // to check selected topic

  task: TaskOutputItems = {
    data: {},
    queueItem: {
      contentId: 'content',
      comments: {
        unresolved: 3,
        total: 5,
      },
    },
  };
  commentDetail: CommentDetails = {
    unresolved: 3,
    total: 5,
  };

  // Datepicker Config
  config: IDatePickerConfig = {
    ...DEF_CONF,
    format: 'MM-DD-YYYY HH:mm:SS',
  };

  date: moment.Moment = moment();

  languages = Languages;
  language = 'en';
  language1 = 'ru';
  language2 = ['ar', 'en', 'fr'];
  language3 = ['en'];
  language4 = ['fr'];

  selected = false;
  selected2 = false;
  selected3 = false;

  // Pagination
  countPerPage = 10;
  currentPage = 1;
  totalCount = 101;

  items = [];
  perPageCounts = [5, 10, 15, 50, 100];

  constructor(private commentsPanelService: CommentsPanelService) {}
  /* Data for topic table columns */
  topicView: TopicView = 'EXPAND';
  topicTableColumns: ITopic[] = [
    { id: 0, risk: 7 },
    { id: 1, risk: 5 },
    { id: 7, risk: 2 },
    { id: 4, risk: 4 },
    { id: 3, risk: 3 },
  ];
  defaultPolicyGuide: Array<PolicyGuide> = [
    {
      name: 'Global Chat',
      rules: [
        { topic: 0, riskThreshold: 6 },
        { topic: 5, riskThreshold: 5 },
      ],
    },
    {
      name: 'Private Chat',
      rules: [{ topic: 5, riskThreshold: 6 }],
    },
  ];

  ngOnInit() {
    Object.values(this.selectBoxTopics).map((topic) => {
      // store topicId and risk-level as key-value
      this.highlightTopics[topic.id] = topic.risk;

      // store selected topic
      this.activeTopics[topic.id] = true;
    });

    for (let i = 0; i < this.totalCount; i++) {
      this.items.push(i + 1);
    }
  }

  checkDeactive(topicId: number) {
    return this.originTopics.some((ele) => ele.id == topicId);
  }

  // Handle click add topic
  clickTopic(topicId: number) {
    // skip this topic have existed on origin topics
    if (this.originTopics.some((ele) => ele.id === +topicId)) {
      return event.stopPropagation();
    }

    const currentTopicIndex = findIndex(
      this.selectBoxTopics,
      (ele) => ele.id == topicId
    );

    // if this topic have existed, remove this one
    if (currentTopicIndex >= 0) {
      this.selectBoxTopics.splice(currentTopicIndex, 1);
      this.selectBoxTopics = [...this.selectBoxTopics];
      this.activeTopics[topicId] = false;
      delete this.highlightTopics[topicId];
      return;
    }

    // add a new topic
    const { name, icon } = Topics[topicId];
    this.selectBoxTopics = [
      ...this.selectBoxTopics,
      {
        id: +topicId,
        icon,
        risk: TOPIC_RISK_DEFAULT,
        name,
      } as any,
    ];
    this.activeTopics[topicId] = true;
    this.highlightTopics[topicId] = TOPIC_RISK_DEFAULT;
  }

  onChangeLevel(topic: TopicSet) {
    console.log(topic);
    alert('onChange topic level. See the console log');
  }

  changeSelectItem(data: any) {
    console.log(data);
  }

  selectTask(task: any) {
    console.log('task: ', task);
  }
  /*
   * option-button-group
   */
  // eslint-disable-next-line @typescript-eslint/member-ordering
  readonly topicChipLayoutOptions: IOptionButton[] = [
    {
      ariaLabel: 'Expanded topic chips',
      value: 'expanded',
      icon: 'view-list',
    },
    {
      ariaLabel: 'Minimized topic chips',
      value: 'minimized',
      icon: 'view-comfy',
    },
  ];

  topicChipLayout: 'expanded' | 'minimized' = 'expanded';

  /*
   * toggle component change
   */
  onToggle(newValue) {
    alert(`toggled! New value is: ${newValue}`);
  }

  openCommentsPanel(task): void {
    this.commentsPanelService.show({
      queueId: 'task',
      contentId: task.queueItem.contentId,
    });
  }
}
