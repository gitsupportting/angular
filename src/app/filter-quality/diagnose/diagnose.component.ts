import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared-components/user.service';
import { User } from 'src/app/shared-components/user';
import { DiagnoseService } from 'src/app/filter-quality/diagnose/diagnose.service';
import {
  ContentType,
  ContentTypes,
  DefaultClient,
  DefaultContentType,
  DefaultLanguage,
  Policy,
  PolicyGuide,
  Language,
  Languages,
  GENERAL_RISK,
  MAXIMUM_NUMBER_BREADCRUMB_KEYWORD,
  MAXIMUM_BREADCRUMB_KEYWORD_LENGTH,
  Topics,
} from 'src/constants';
import {
  FailingFragment,
  Slots,
  TextInput,
  TextClassifiedOutput,
  Rule,
} from 'classify-text-swagger-client';
import { Subscription, from } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';
import { TopicSet, ITopic } from 'src/app/shared-components/interfaces';
import { SPELLING_MISTAKE_RISK } from 'src/constants';
import { cloneDeep, isEqual, merge } from 'lodash';
import { Breadcrumb } from 'src/app/shared-components/breadcrumbs/breadcrumb.interface';

interface Topic extends ITopic {
  name: string;
  icon: string;
}

export interface Client {
  id: number;
  name: string;
}

function fromTopicSet(topicSet: TopicSet): Topic[] {
  return Object.entries(topicSet).map(([id, risk]) => {
    const { name, icon } = Topics[id];
    return {
      id: parseInt(id, 10),
      risk,
      name,
      icon,
    };
  });
}

interface SearchResult {
  // index on the SearchResult List
  index: number;

  // properties for theloading indicator
  isLoading: boolean;
  isError: boolean;

  // properties for the refresh
  language: string;
  clientId: number;
  contentType: TextInput.ContentTypeEnum;

  // properties for toggle deep analysis
  isDeep: boolean;

  topics: { [topic: string]: any };
  searchedParams: Array<any>;
  policies: Array<Policy>;
  tags: Array<Tag>;
  spellingMistakes: Array<string>;
  extended: Array<Slots>;
  onToogleMore;

  escalateData: EscalateData;
}

export interface EscalateData {
  textSearch: string;
  topics: Topic[];
}

const DiagnoseBreadcrumb: Breadcrumb[] = [
  {
    label: 'Filter Quality',
    url: '/filter-quality',
  },
  {
    label: 'Audit Examples',
    url: '/filter-quality/audit-examples',
  },
  {
    label: 'Diagnose',
    url: '/filter-quality/diagnose',
  },
];

@Component({
  selector: 'ftq-diagnose',
  templateUrl: './diagnose.component.html',
  styleUrls: ['./diagnose.component.less'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ 'max-height': '0', overflow: 'hidden' }),
        animate('1s', style({ 'max-height': '1000px' })),
      ]),
      transition(':leave', [
        style({ 'max-height': '1000px', overflow: 'hidden' }),
        animate('0.4s', style({ 'max-height': '0' })),
      ]),
    ]),
  ],
})
export class DiagnoseComponent implements OnInit, OnDestroy {
  user: User;
  breadcrumbs: Breadcrumb[] = DiagnoseBreadcrumb;
  predictions: { [lang: string]: any } = {};
  policyGuides: Array<PolicyGuide> = [];

  isLoading = true;
  isError = false;
  isDeep = false;

  topics: { [topic: string]: any } = {};
  policies: Array<Policy> = [];
  extended: Array<Slots> = [];

  // Content type Select Box
  contentTypeList = ContentTypes;
  contentTypeSelected: ContentType;

  // Client Id Select Box
  // TODO: This needs to be externally sourced
  clients: Array<Client> = [
    { id: 0, name: 'Community Sift' },
    { id: 132, name: 'Habbo' },
    { id: 60, name: 'Twitter' },
  ];
  clientSelected: Client;
  selectedClients: Client[] = [];

  // Language Select Box
  // TODO: This needs to be externally sourced
  languages: Language[] = Languages;
  languageSelected: Language;

  resultsSearched: Array<SearchResult> = [];
  subscriptions: Subscription = new Subscription();
  searchInput: TextInput = {
    text: '',
    clientId: DefaultClient,
    language: DefaultLanguage,
    contentType: DefaultContentType,
  };
  clientIds: number[] = [DefaultClient];

  // error message if compare input is invalid
  compareInputMsg: CompareInputMsg = {
    isShow: false,
    content: '',
  };

  constructor(
    public userService: UserService,
    private diagnoseService: DiagnoseService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    // add language detection
    const detectionLanguage: Language = {
      code: '*',
      name: '*',
      partial: false,
    };
    this.languages = [detectionLanguage, ...this.languages];

    /* Init Data For The Select Box */
    const {
      language,
      lastClientId,
      lastContentType,
    } = this.userService.preferences;

    // init data for the last-content-type select box
    this.contentTypeSelected = this.contentTypeList.find(
      (type) => type.value === lastContentType
    );

    // init data for client-id select box
    this.clientSelected = this.clients.find(
      (client) => client.id === lastClientId
    );

    // init data for client id list
    this.clientIds = this.clientSelected ? [lastClientId] : [DefaultClient];
    this.selectedClients = [this.clientSelected];

    // init data for language select box
    this.languageSelected = this.languages.find(
      (lang) => lang.code === language
    );

    // get policy data
    this.policyGuides = this.diagnoseService.getPolicyGuides();
    // get keyWord from url & call search
    this.subscriptions.add(
      this.route.url.subscribe((fragments) => {
        // get the list path
        const paths = fragments.map((fragment) => fragment.path);

        // set breadcrumb by keyword from url path
        this.breadcrumbs = this.getBreadcrumb(paths);

        // search the last path
        const lastPath = paths.slice(-1).pop();
        const searchText =
          lastPath && this.diagnoseService.decodeKeyWord(lastPath);

        // store the searchText to the service
        this.diagnoseService.updateKeyWordFromUrl(searchText);

        if (searchText) {
          // reset warning
          this.compareInputMsg = { isShow: false, content: '' };

          // hide the loading indicator
          this.isLoading = true;
          this.isError = false;

          // update search input to memo
          const {
            lastClientId,
            lastContentType,
            language,
          } = this.userService.preferences;
          this.searchInput = {
            text: searchText,
            clientId: lastClientId,
            contentType: lastContentType,
            language,
          };
          this.resultsSearched = [];
          this.onSearchParams({ ...this.searchInput });
        } else {
          this.isLoading = false;
          this.isError = true;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  /*
   *  Compare a list topic with the policy guide to:
   *  + check the policy pass or fail
   *  + get all fail topic
   */
  handlePolicies(topics: TopicSet, policyGuides: Array<PolicyGuide>) {
    // get array policies
    const policyModels = policyGuides.map((policyGuide) => {
      let isSafe = true;
      // check a policy is safe
      for (const rule of policyGuide.rules) {
        const { topic } = rule;

        // set a policyGuide isSafe when topics and policyGuide contains the same topic
        if (topics[topic]) {
          const riskLevel = topics[topic];
          const riskThreshold = rule.riskThreshold;

          if (riskLevel >= riskThreshold) {
            isSafe = false;
            break;
          }
        }
      }

      return { isSafe, policyGuide };
    });

    return { policyModels };
  }

  /*
   *  Filter the fail topic on the FaillingFragments
   */
  getMistake(failingFragments: Array<FailingFragment> | any): Array<string> {
    return failingFragments.reduce((mistakes, fragment) => {
      if (fragment.topics[0] === SPELLING_MISTAKE_RISK) {
        mistakes.push(fragment.text);
      }
      return mistakes;
    }, []);
  }

  /*
   *  Get the tags for the what caused of which tags
   */
  getTags(extended: Array<Slots> | any): Array<Tag> {
    const extendedClone = cloneDeep(extended);
    return extendedClone.reduce((tags, slot) => {
      // valid tokens is a tokens have
      // + the text as same as the slot text and
      // + contains a topic other than general-risk and should be have risk level !== 0
      const validToken: Rule = slot.tokens.find((token) => {
        return (
          token.text === slot.solution &&
          Object.entries(token.topics).some(
            ([topicId, riskLevel]) =>
              Number(topicId) !== GENERAL_RISK && riskLevel !== 0
          )
        );
      });

      if (validToken) {
        const { text, topics } = validToken;

        // remove the general topic and any topic have risk equal 0
        Object.entries(topics).forEach(([id, risk]) => {
          if (Number(id) === GENERAL_RISK || risk === 0) {
            delete topics[id];
          }
        });

        const topicSet = { ...topics };

        // exclude the duplicate tags
        if (!this.isDuplicateTag(tags, text, topicSet)) {
          const listTopic = fromTopicSet(topicSet);
          const tag: Tag = {
            text,
            topics: listTopic,
          };

          tags.push(tag);
        }
      }

      return tags;
    }, []);
  }

  // duplicate tag is a tag have both of text and topic existed on the tags
  isDuplicateTag(tags: Tag[], tokenText: string, topicSet: TopicSet) {
    return tags.some(({ text, topics }) => {
      const currentTopicSet = topics.reduce((result, topic) => {
        result[topic.id] = topic.risk;
        return result;
      }, {} as TopicSet);
      return text === tokenText && isEqual(currentTopicSet, topicSet);
    });
  }

  /*
   * Hide the diagnose loading indicator
   */
  hideLoading() {
    setTimeout(() => {
      this.isLoading = false;
    }, 300);
  }

  /*
   * Refresh search a search item
   */
  onRefresh(index: number) {
    const resultSearched = this.resultsSearched[index];

    if (resultSearched) {
      resultSearched.isError = false;
      resultSearched.isLoading = true;
      resultSearched.searchedParams?.map((searchedParam) => {
        const searchInput: TextInput = {
          text: this.searchInput.text,
          clientId: searchedParam.clientId,
          language: searchedParam.language,
          contentType: searchedParam.contentType,
        };
        this.onSearchParams(searchInput, index);
      });
    }
  }

  /*
   * Remove a search item
   */
  onRemove(searchResultIndex) {
    this.resultsSearched.splice(searchResultIndex, 1);
  }

  /*
   * Toggle deeper analysis a search item
   */
  onToogleMore(index) {
    this.isDeep = !this.isDeep;
    const foundIndex = this.resultsSearched.findIndex((_, i) => i === index);
    this.resultsSearched[foundIndex].isDeep = !this.resultsSearched[foundIndex]
      .isDeep;
  }

  onLanguageChanged(languages: Language[]) {
    const { code } = languages[0];
    this.languageSelected = languages[0];
    this.searchInput.language = code;
    this.userService.mergePreferences({ language: code });
  }

  onContentTypeChanged(contentTypes: ContentType[]) {
    const { value } = contentTypes[0];

    this.contentTypeSelected = contentTypes[0];
    this.searchInput.contentType = value;
    this.userService.mergePreferences({ lastContentType: value });
  }

  onClientChanged(clients: Client[]) {
    if (clients.length > 0) {
      const ids = clients.map((i) => i.id);
      this.clientSelected = clients[0];
      this.searchInput.clientId = ids[0];
      this.userService.mergePreferences({ lastClientId: ids[0] });
      this.clientIds = ids;
      this.selectedClients = clients;
    } else {
      this.clientIds = [];
    }
  }

  /*
   * Add a new search
   */
  onAddANewSearch() {
    // initial an empty result for loading
    const res: any | SearchResult = {};

    // store result index to a variable
    let loadingIndex = this.resultsSearched.length;
    this.resultsSearched = [...this.resultsSearched, res];

    // fire the loading effect
    res.isError = false;
    res.isLoading = true;

    // reset warning
    this.compareInputMsg = { isShow: false, content: '' };

    this.clientIds.map((clientId) => {
      let indexAdd = null;
      const searchInput = {
        ...this.searchInput,
        clientId,
      };

      this.resultsSearched.map((_, index) => {
        const indexSameQuery = this.indexSameQuery(searchInput, index);
        if (indexSameQuery !== -1) {
          if (
            this.resultsSearched[index].searchedParams &&
            this.resultsSearched[index].searchedParams.length > 1
          ) {
            // remove searchedParam same searchInput
            this.resultsSearched[index].searchedParams.splice(
              indexSameQuery,
              1
            );
          } else {
            indexAdd = index;
          }
        }
      });

      this.onSearchParams(searchInput, indexAdd, loadingIndex);
      loadingIndex++;
    });
  }

  /*
   * Search by params
   */
  onSearchParams(searchInput: TextInput, indexAdd = null, loadingIndex?) {
    from(this.diagnoseService.search(searchInput)).subscribe(
      (searchResult: TextClassifiedOutput) => {
        const result: any | SearchResult = {};
        this.predictions = searchResult.predictions;

        result.isError = false;
        result.language = searchInput.language;

        // Extended data for diagnose-text component
        result.extended = searchResult.extended;

        // set topic data for topic component
        const topics: TopicSet = { ...searchResult.topics };
        result.topics = fromTopicSet(topics);

        // Set policies data for policy component
        const { policyModels } = this.handlePolicies(topics, this.policyGuides);
        result.policies = policyModels;

        // Set mistakes for the "Spelling Mistakes"
        const failingFragments: FailingFragment[] =
          searchResult.failingFragments;
        result.mistakes = this.getMistake(failingFragments);

        // Set tag for the "What cause of which tag"
        result.tags = this.getTags(result.extended);

        result.contentType = searchInput.contentType;
        result.clientId = searchInput.clientId;

        // if indexAdd !== null => refresh old block, else => add new block
        if (indexAdd !== null) {
          this.handleRefreshResult(result, searchInput, indexAdd);
        } else {
          this.handleAddResult(result, searchInput);
        }

        // get data for escalate
        result.escalateData = {
          textSearch: this.searchInput.text,
          topics: fromTopicSet(topics),
        };
      },
      (e) => {
        console.error('[Diagnose Component] onSearch get error: ', e);
        this.isLoading = false;
        this.isError = true;
      },
      () => {
        if (typeof loadingIndex === 'number') {
          this.resultsSearched[loadingIndex]?.isLoading &&
            this.onRemove(loadingIndex);
        }
        this.hideLoading();
      }
    );
  }

  handleAddResult(result: SearchResult, searchInput: TextInput) {
    const foundIndex = this.indexSameResultByKey(result, 'topics');
    if (this.resultsSearched.length > 0 && foundIndex > -1) {
      const indexSameQuery = this.indexSameQuery(searchInput, foundIndex);
      if (indexSameQuery === -1) {
        this.addSearchParamByIndex(searchInput, foundIndex);
      } else {
        // merge searched
        this.mergeResultSearched(result, foundIndex);
      }
    } else {
      result.searchedParams = [searchInput];
      this.resultsSearched = [...this.resultsSearched, result];
    }
  }

  handleRefreshResult(
    result: SearchResult,
    searchInput: TextInput,
    indexAdd: number
  ) {
    this.hideLoading.call(result);
    const isSameTopicsIndexAdd = isEqual(
      this.resultsSearched[indexAdd]?.topics,
      result.topics
    );

    // if the result return topics like indexAdd
    if (isSameTopicsIndexAdd) {
      const indexSameQuery = this.indexSameQuery(searchInput, indexAdd);
      // add new query
      if (indexSameQuery === -1) {
        this.addSearchParamByIndex(searchInput, indexAdd);
      }
      // update result indexAdd
      this.mergeResultSearched(result, indexAdd);
      this.hideLoading.call(this.resultsSearched[indexAdd]);

      // else result return other topics
    } else {
      const foundIndex = this.indexSameResultByKey(result, 'topics');
      if (foundIndex > -1) {
        const isSameQueryTopics = this.indexSameQuery(searchInput, foundIndex);
        if (isSameQueryTopics === -1) {
          this.addSearchParamByIndex(searchInput, foundIndex);
          // remove searchedParams in indexAdd
          const indexSameQuery = this.indexSameQuery(searchInput, indexAdd);
          if (indexSameQuery !== -1) {
            this.resultsSearched[indexAdd] &&
              this.removeSearchParam(indexAdd, indexSameQuery);
          }
          // remove resultSearched if searchedParams emptry
          if (this.resultsSearched[indexAdd]?.searchedParams.length === 0) {
            this.onRemove(indexAdd);
          }
          this.hideLoading.call(this.resultsSearched[indexAdd]);
        } else {
          this.mergeResultSearched(result, foundIndex);
          this.hideLoading.call(this.resultsSearched[foundIndex]);
        }
      } else {
        this.hideLoading.call(this.resultsSearched[indexAdd] || {});

        // remove searchedParams
        const indexSameQuery = this.indexSameQuery(searchInput, indexAdd);
        if (indexSameQuery !== -1) {
          this.removeSearchParam(indexAdd, indexSameQuery);
        }
        // remove result indexAdd if searchedParams emptry
        if (this.resultsSearched[indexAdd]?.searchedParams.length === 0) {
          this.onRemove(indexAdd);
        }

        result.searchedParams = [searchInput];
        this.resultsSearched = [...this.resultsSearched, result];
        this.hideLoading.call(result);
      }
    }
  }

  addSearchParamByIndex(searchInput: TextInput, indexResult: number) {
    this.resultsSearched[indexResult].searchedParams = [
      ...this.resultsSearched[indexResult].searchedParams,
      searchInput,
    ];
  }

  removeSearchParam(indexResult: number, indexParam: number) {
    this.resultsSearched[indexResult]?.searchedParams?.splice(indexParam, 1);
  }

  mergeResultSearched(result: SearchResult, index: number) {
    this.resultsSearched[index] = merge(
      {},
      this.resultsSearched[index],
      result
    );
  }

  indexSameResultByKey(result: any, key = 'topics') {
    return this.resultsSearched.findIndex((item) =>
      isEqual(item[key], result[key])
    );
  }

  indexSameQuery(searchInput: any, indexResult: number) {
    const result = this.resultsSearched[indexResult];
    return result?.searchedParams
      ? result.searchedParams.findIndex((item: any) =>
          isEqual(item, searchInput)
        )
      : -1;
  }

  getClientName(clientId) {
    const client = this.clients.find((client) => client.id === clientId);
    return client?.name || clientId;
  }

  getContentType(value) {
    const content = this.contentTypeList.find(
      (contentType) => contentType.value === value
    );
    return content?.content || value;
  }

  getResultTitle(searchedParams: any) {
    const language = [
      ...new Set(searchedParams.map((item) => item.language)),
    ].join(', ');
    const contentType = [
      ...new Set(
        searchedParams.map((item) => this.getContentType(item.contentType))
      ),
    ].join(', ');
    const clientId = [
      ...new Set(
        searchedParams.map((item) => this.getClientName(item.clientId))
      ),
    ].join(', ');

    return `${language} ${contentType} on ${clientId}`;
  }

  /*
   * Generate the breadcrumb
   */
  getBreadcrumb(paths: string[]) {
    const baseUrl = '/filter-quality/diagnose';

    // create a full list breadcrumb from keyword
    const breadFromKeyWord = paths.reduce((memo: Breadcrumb[], path, index) => {
      const prevUrl = memo[index - 1]?.url || baseUrl;
      const url = prevUrl + '/' + path;
      // minimize the decoded keyword
      const label = this.minimizeBreadcumbPath(
        this.diagnoseService.decodeKeyWord(path)
      );

      memo.push({ url, label } as Breadcrumb);
      return memo;
    }, []);

    // minimized list breadcrumb
    // if the breadcrumb keyword longer than MAXIMUM_NUMBER_BREADCRUMB_KEYWORD (example it's 2)
    // So the breadcrumb keyword should be minimize to ... > keyword1 > keyword2
    const breadKeyWordLength = breadFromKeyWord.length;
    if (breadKeyWordLength > MAXIMUM_NUMBER_BREADCRUMB_KEYWORD) {
      breadFromKeyWord.splice(
        0,
        breadKeyWordLength - MAXIMUM_NUMBER_BREADCRUMB_KEYWORD,
        {
          url: breadFromKeyWord[breadKeyWordLength - 1].url, // set to the last url
          label: '...',
        }
      );
    }

    const breadcrumb = DiagnoseBreadcrumb.concat(breadFromKeyWord);

    return breadcrumb;
  }

  /*
   * Minimize the breadcrumb label
   */
  minimizeBreadcumbPath(pathString: string) {
    return pathString.length > MAXIMUM_BREADCRUMB_KEYWORD_LENGTH
      ? pathString.slice(0, MAXIMUM_BREADCRUMB_KEYWORD_LENGTH) + '...'
      : pathString;
  }

  onClientClosed() {
    // handle empty client
    this.handleEmptyClient();
    this.checkSameParams();
  }

  onLanguageClosed() {
    this.checkSameParams();
  }

  onContentTypeClosed() {
    this.checkSameParams();
  }

  handleEmptyClient() {
    if (this.clientIds.length === 0) {
      // set default client if user uncheck all
      this.selectedClients = [this.clientSelected];

      // init data for client id list
      this.clientIds = [this.clientSelected.id];
    }
  }

  checkSameParams() {
    let sameInput = 0;
    this.clientIds.map((clientId) => {
      const searchInput = {
        ...this.searchInput,
        clientId,
      };
      this.resultsSearched.map((_, index) => {
        const indexSameQuery = this.indexSameQuery(searchInput, index);
        if (indexSameQuery !== -1) {
          sameInput++;
        }
      });
    });
    if (sameInput === this.clientIds.length) {
      // show warning
      this.compareInputMsg = {
        isShow: true,
        content: 'Search condition already exists !',
      };
    } else {
      this.compareInputMsg = { isShow: false, content: '' };
    }
  }
}

export interface Tag {
  topics: Topic[];
  text: string;
}
export interface CompareInputMsg {
  isShow: boolean;
  content: string;
}
