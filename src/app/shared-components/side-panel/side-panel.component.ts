import { Component, Injector, Input, OnInit } from '@angular/core';
import { cloneDeep, findIndex, mapKeys } from 'lodash';
import { CommentInput, Rule } from 'rules-swagger-client';
import { forkJoin } from 'rxjs';
import { RuleService } from 'src/app/shared/services/api/rule.service';
import {
  Language,
  Languages,
  Topics,
  TOPIC_RISK_DEFAULT,
  GENERAL_RISK,
} from 'src/constants';
import { AbstractModalComponent } from '../../shared/base/base.modal';
import { ITopic, TopicSet } from '../interfaces';
import { UserService } from '../user.service';
import { SidePanelData } from './side-panel.service';
import { ComboBoxLabel, ComboBoxClass } from '../combo-box/combo-box.component';

const QuestionMarkLanguage = {
  code: '??',
  name: 'I don’t know',
  partial: false,
};

interface DisplayTopic extends ITopic {
  name: string;
  icon: string;
}

@Component({
  selector: 'mod-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.less'],
})
export class SidePanelComponent extends AbstractModalComponent
  implements OnInit {
  @Input() key = '';

  sidePanelData: SidePanelData = {
    show: false,
    key: '',
  };
  topics: DisplayTopic[];
  textSearch: string;
  originTopics: ITopic[];
  topicAll: ITopic[];
  highlightTopics: { [topicId: number]: number } = {}; // to check selected risk of each topic
  languages: Language[] = [];
  languageSelected: Language;
  comment: string;
  callingApi = false;
  comboBoxLabel: ComboBoxLabel = {
    default: 'Add more topics',
    active: 'Choose Topic',
  };
  comboBoxClass: ComboBoxClass = {
    default: 'bg-surface',
    active: 'bg-neutral',
  };
  topicBlackList: DisplayTopic[];

  constructor(
    readonly injector: Injector,
    private userService: UserService,
    private ruleService: RuleService
  ) {
    super(injector);
  }

  ngOnInit() {
    this.languages = [...Languages];
    // add question mark language to Languages
    this.languages.unshift(QuestionMarkLanguage);

    /* Init Data For The Select Box */
    const { language } = this.userService.preferences;

    // Init data for language select box
    this.languageSelected = this.languages.find(
      (lang) => lang.code === language
    );

    // Topic all from const
    this.topicAll = Object.entries(Topics).map(([index, topic]) => {
      return { ...topic, id: +index };
    });

    // Listen change of side panel
    this.rxSubscribe(
      this.sidePanelService.sidePanelObserable,
      (sidePanelData: SidePanelData) => {
        if (sidePanelData && sidePanelData.show) {
          // init value
          this.highlightTopics = {};
          this.comment = '';
          this.languageSelected = this.languages.find(
            (lang) => lang.code === language
          );

          // init topics
          this.topics = sidePanelData.data.topics as DisplayTopic[];

          // store origin topics to memo
          this.originTopics = cloneDeep(sidePanelData.data.topics) as ITopic[];

          // topic black list (topic has name is general-risk)
          this.topicBlackList = this.topics.filter(
            (item) => item['id'] === GENERAL_RISK
          );

          // init textSearch
          this.textSearch = sidePanelData.data.textSearch;

          Object.values(this.topics).map((topic) => {
            // store topicId and risk-level as key-value
            this.highlightTopics[topic.id] = topic.risk;
          });

          this.sidePanelData = {
            ...sidePanelData,
            show: !!sidePanelData.show,
            key: sidePanelData.key,
          };
        } else {
          this.sidePanelData.show = false;
          this.sidePanelData.key = '';
        }
      }
    );
  }

  // Handle topic change
  onChangeTopic(topics: DisplayTopic[]) {
    this.topics = [...topics];
    this.highlightTopics = {};
    // add default risk for topic and highLight
    for (const topic of topics) {
      if (topic['risk'] === undefined) {
        this.highlightTopics[topic.id] = TOPIC_RISK_DEFAULT;
        topic.risk = TOPIC_RISK_DEFAULT;
      } else {
        this.highlightTopics[topic.id] = topic.risk;
      }
    }
  }

  // Handle level change
  onChangeLevel(topic: TopicSet) {
    this.highlightTopics[Object.keys(topic)[0]] = +Object.values(topic)[0];

    const [key, value] = Object.entries(topic)[0];
    this.highlightTopics[key] = +value;
    this.topics = [
      ...this.topics.map((topic) => {
        if (topic['id'] == +key) {
          topic.risk = value;
        }

        return topic;
      }),
    ];
  }

  // Handle language change
  onLanguageChanged(language) {
    this.languageSelected = language;
  }

  onClose() {
    this.sidePanelService.hide();
  }

  // Update Rule and Update Comment
  apply() {
    this.callingApi = true;
    const { lastClientId } = this.userService.preferences;

    const observables = [];
    // update rule
    const ruleBody: Rule = {
      text: this.textSearch,
      language: this.languageSelected.code,
      clientId: lastClientId,
      topics: mapKeys(this.highlightTopics, (value, key) => `"${+key}"`),
    };
    observables.push(
      this.ruleService.updateRule(
        this.languageSelected.code,
        this.textSearch,
        ruleBody
      )
    );

    // create a comment
    if (this.comment) {
      const commentBody: CommentInput = {
        text: this.comment,
      };
      observables.push(
        this.ruleService.addComment(
          this.languageSelected.code,
          this.textSearch,
          commentBody
        )
      );
    }

    forkJoin(observables).subscribe(
      (results: any) => {
        // TODO: callback handle
        alert('call success');
        this.callingApi = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  get isShow() {
    return (
      this.sidePanelData.show &&
      this.sidePanelData.key.toLowerCase() === this.key.toLowerCase()
    );
  }
}
