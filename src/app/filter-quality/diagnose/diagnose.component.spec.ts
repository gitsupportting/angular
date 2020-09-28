import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DiagnoseComponent } from './diagnose.component';
import { TextInput } from 'classify-text-swagger-client';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RightUnderscorePipe } from 'src/app/pipes/right-underscore/right-underscore.pipe';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { APP_BASE_HREF } from '@angular/common';
import { Tag, Client } from './diagnose.component';
import { BehaviorSubject, of } from 'rxjs';
import { UserService } from 'src/app/shared-components/user.service';
import { DiagnoseService } from './diagnose.service';
import { Language, ContentType, PolicyGuide } from 'src/constants';

const mockFailingFragments = [
  {
    text: 'funciasdl',
    normalized: 'funciasdl',
    topics: {
      0: 4,
    },
    startPos: 10,
    endPos: 18,
  },
  {
    text: 'wowasdwww',
    normalized: 'wowasdwww',
    topics: {
      0: 4,
      1: 5,
    },
    startPos: 20,
    endPos: 28,
  },
  {
    text: 'shit',
    normalized: 'shit',
    topics: {
      0: 5,
      5: 5,
    },
    startPos: 35,
    endPos: 40,
  },
];

const mockExtendDuplicate = [
  {
    original: 'i',
    text: 'i',
    solution: 'i love you',
    tokens: [
      {
        text: 'i',
        topics: {
          0: 1,
        },
        language: 'ar',
        altSpellings: [],
        altSenses: [],
        leetMappings: [],
        flags: ['MODERATED', 'ENABLED'],
        taskIds: [],
        dateCreated: 0,
        dateUpdated: 0,
        clientId: 0,
      },
      {
        text: 'i love you',
        topics: {
          0: 3,
          4: 3,
          1: 0,
          6: 0,
        },
        language: 'ar',
        altSpellings: [],
        altSenses: [],
        leetMappings: [],
        flags: ['MODERATED', 'ENABLED'],
        taskIds: [],
        dateCreated: 0,
        dateUpdated: 0,
        clientId: 0,
      },
      {
        text: 'iloveyou',
        topics: {
          0: 3,
          4: 3,
        },
        language: 'ar',
        altSpellings: [],
        altSenses: [],
        leetMappings: [],
        flags: ['MODERATED', 'ENABLED'],
        taskIds: [],
        dateCreated: 0,
        dateUpdated: 0,
        clientId: 0,
      },
    ],
  },
  {
    original: 'love',
    text: 'love',
    solution: 'i love you',
    tokens: [
      {
        text: 'love',
        topics: {
          0: 2,
          4: 2,
        },
        language: 'ar',
        altSpellings: [],
        altSenses: [],
        leetMappings: [],
        flags: ['MODERATED', 'ENABLED'],
        taskIds: [],
        dateCreated: 0,
        dateUpdated: 0,
        clientId: 0,
      },
      {
        text: 'i love you',
        topics: {
          0: 3,
          4: 3,
        },
        language: 'ar',
        altSpellings: [],
        altSenses: [],
        leetMappings: [],
        flags: ['MODERATED', 'ENABLED'],
        taskIds: [],
        dateCreated: 0,
        dateUpdated: 0,
        clientId: 0,
      },
      {
        text: 'iloveyou',
        topics: {
          0: 3,
          4: 3,
        },
        language: 'ar',
        altSpellings: [],
        altSenses: [],
        leetMappings: [],
        flags: ['MODERATED', 'ENABLED'],
        taskIds: [],
        dateCreated: 0,
        dateUpdated: 0,
        clientId: 0,
      },
      {
        text: 'love you',
        topics: {
          0: 3,
          4: 3,
        },
        language: 'ar',
        altSpellings: [],
        altSenses: [],
        leetMappings: [],
        flags: ['MODERATED', 'ENABLED'],
        taskIds: [],
        dateCreated: 0,
        dateUpdated: 0,
        clientId: 0,
      },
    ],
  },
  {
    original: 'you',
    text: 'you',
    solution: 'i love you',
    tokens: [
      {
        text: 'you',
        topics: {
          0: 1,
        },
        language: 'ar',
        altSpellings: [],
        altSenses: [],
        leetMappings: [],
        flags: ['MODERATED', 'ENABLED'],
        taskIds: [],
        dateCreated: 0,
        dateUpdated: 0,
        clientId: 0,
      },
      {
        text: 'i love you',
        topics: {
          0: 3,
          4: 3,
        },
        language: 'ar',
        altSpellings: [],
        altSenses: [],
        leetMappings: [],
        flags: ['MODERATED', 'ENABLED'],
        taskIds: [],
        dateCreated: 0,
        dateUpdated: 0,
        clientId: 0,
      },
      {
        text: 'iloveyou',
        topics: {
          0: 3,
          4: 3,
        },
        language: 'ar',
        altSpellings: [],
        altSenses: [],
        leetMappings: [],
        flags: ['MODERATED', 'ENABLED'],
        taskIds: [],
        dateCreated: 0,
        dateUpdated: 0,
        clientId: 0,
      },
      {
        text: 'love you',
        topics: {
          0: 3,
          4: 3,
        },
        language: 'ar',
        altSpellings: [],
        altSenses: [],
        leetMappings: [],
        flags: ['MODERATED', 'ENABLED'],
        taskIds: [],
        dateCreated: 0,
        dateUpdated: 0,
        clientId: 0,
      },
    ],
  },
  {
    original: 'so',
    text: 'so',
    solution: 'so',
    tokens: [
      {
        text: 'so',
        topics: {
          0: 1,
        },
        language: 'ar',
        altSpellings: [],
        altSenses: [],
        leetMappings: [],
        flags: ['MODERATED', 'ENABLED'],
        taskIds: [],
        dateCreated: 0,
        dateUpdated: 0,
        clientId: 0,
      },
    ],
  },
  {
    original: 'fuck',
    text: 'fuck',
    solution: 'fuck',
    tokens: [
      {
        text: 'fuck',
        topics: {
          0: 6,
          5: 6,
        },
        language: 'ar',
        altSpellings: [],
        altSenses: ['fück'],
        leetMappings: [],
        flags: ['MODERATED', 'ENABLED'],
        taskIds: [],
        dateCreated: 0,
        dateUpdated: 0,
        clientId: 0,
      },
      {
        text: 'fück',
        topics: {
          0: 6,
          5: 6,
        },
        language: 'ar',
        altSpellings: [],
        altSenses: ['fuck'],
        leetMappings: [],
        flags: ['MODERATED', 'ENABLED'],
        taskIds: [],
        dateCreated: 0,
        dateUpdated: 0,
        clientId: 0,
      },
    ],
  },
];

describe('DiagnoseComponent', () => {
  let component: DiagnoseComponent;
  let fixture: ComponentFixture<DiagnoseComponent>;
  const paramInput = 'I really love scrambled eggs. They are the Shiiiiit';
  const policyGuides = [
    {
      name: 'Global Chat',
      rules: [
        { topic: '0', riskThreshold: 6 },
        { topic: '5', riskThreshold: 5 },
      ],
    },
    { name: 'Private Chat', rules: [{ topic: '5', riskThreshold: 6 }] },
  ];
  const resultSearchFake: any = {
    language: 'en',
    extended: [],
    topics: { 0: 5, 5: 5 },
    policies: [],
    failingFragments: [],
    contentType: 'SHORT_TEXT',
    clientId: 0,
  };
  const mockDiagnoseService = {
    search: jest.fn(() => new BehaviorSubject(resultSearchFake)),
    getPolicyGuides: jest.fn(() => policyGuides),
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiagnoseComponent, RightUnderscorePipe],
      providers: [
        { provide: DiagnoseService, useValue: mockDiagnoseService },
        { provide: APP_BASE_HREF, useValue: '/' },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 123 }),
          },
        },
        UserService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: new BehaviorSubject({
              input: paramInput,
              highlight: '',
            }),
            url: new BehaviorSubject({
              path: paramInput,
              parameters: {},
            }),
          },
        },
      ],
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnoseComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.getMistake).toBeTruthy();
  });

  describe('#handlePolicies', () => {
    it('Topic is unsafe if risk greater than or equal to riskThreshold', () => {
      const topics = {
        0: 5,
        4: 2,
        5: 5,
      };
      const policyGuides: PolicyGuide[] = [
        {
          name: 'Global Chat',
          rules: [
            { topic: 0, riskThreshold: 6 },
            { topic: 5, riskThreshold: 5 },
          ],
        },
        { name: 'Private Chat', rules: [{ topic: 5, riskThreshold: 6 }] },
      ];
      const { policyModels } = component.handlePolicies(topics, policyGuides);
      expect(policyModels[0].isSafe).toBe(false);
      expect(policyModels[1].isSafe).toBe(true);
    });

    it('Topic is safe if risk greater than or equal to riskThreshold', () => {
      const topics = {
        0: 5,
        4: 2,
        5: 1,
      };
      const policyGuides: PolicyGuide[] = [
        {
          name: 'Global Chat',
          rules: [
            { topic: 0, riskThreshold: 6 },
            { topic: 5, riskThreshold: 5 },
          ],
        },
        { name: 'Private Chat', rules: [{ topic: 5, riskThreshold: 6 }] },
      ];
      const { policyModels } = component.handlePolicies(topics, policyGuides);
      expect(policyModels[0].isSafe).toBe(true);
      expect(policyModels[1].isSafe).toBe(true);
    });
  });

  // get mistake for the Spelling Mistake
  describe('#getMistake', () => {
    it('The spelling mistakes should be an array', () => {
      const result = component.getMistake(mockFailingFragments);
      expect(Array.isArray(result)).toBe(true);
    });

    it('The spelling mistakes should be any fragment which have general risk 4', () => {
      const validText = ['funciasdl', 'wowasdwww'];
      const result = component.getMistake(mockFailingFragments);
      for (const text of validText) {
        expect(result.includes(text)).toBe(true);
      }
    });

    it("The spelling mistakes should not any fragment which don't have general risk 4", () => {
      const excludeText = ['shit', 'abc'];
      const result = component.getMistake(mockFailingFragments);
      for (const text of excludeText) {
        expect(result.includes(text)).toBe(false);
      }
    });

    it('The spelling mistakes should be sort from index of failling fragment data', () => {
      const expectResult = ['funciasdl', 'wowasdwww'];
      const result = component.getMistake(mockFailingFragments);
      expect(result).toEqual(expectResult);
    });
  });

  // get Tags for the What caused which tags
  describe('#getTags', () => {
    const GENERAL_RISK = 0;
    it('The tags should be an array', () => {
      const tags: Tag[] = component.getTags(mockExtendDuplicate);
      expect(Array.isArray(tags)).toBe(true);
    });

    it('Each tag should be have at least a topic other than 0 (general-risk) and the risk level should be not equal 0', () => {
      const tags: Tag[] = component.getTags(mockExtendDuplicate);
      expect(tags.length > 0).toBe(true);

      tags.forEach((tag) => {
        const topics = tag.topics;
        topics.forEach((topic) => {
          expect(topic.id !== GENERAL_RISK).toBe(true);
          expect(topic.risk !== 0).toBe(true);
        });
      });
    });

    it('Each tag should not contains general topic', () => {
      const tags: Tag[] = component.getTags(mockExtendDuplicate);
      expect(tags.length > 0).toBe(true);

      tags.forEach((tag) => {
        const riskIds = tag.topics.map((topic) => topic.id);
        expect(
          riskIds.length && !riskIds.some((id) => id === GENERAL_RISK)
        ).toBe(true);
      });
    });

    it('Each tag should not be duplicate', () => {
      const expectedTagsData = [
        {
          text: 'i love you',
          topics: [expect.objectContaining({ id: 4, risk: 3 })],
        },
        {
          text: 'fuck',
          topics: [expect.objectContaining({ id: 5, risk: 6 })],
        },
      ];

      const tags: Tag[] = component.getTags(mockExtendDuplicate);
      expect(tags).toEqual(expectedTagsData);
    });
  });

  describe('#onRefresh', () => {
    const searchInput: TextInput = {
      text: 'test Text',
      clientId: 132,
      contentType: 'LONG_TEXT',
      language: 'en',
    };
    const resultSearchedFake: any = {
      index: 0,
      isError: false,
      isDeep: false,
      isLoading: false,
      language: 'ja',
      extended: [],
      topics: [
        { id: 0, risk: 3, verification: undefined },
        { id: 5, risk: 3, verification: undefined },
      ],
      policies: [],
      spellingMistakes: [],
      tags: [],
      contentType: 'SHORT_TEXT',
      clientId: 0,
      onToogleMore: jest.fn(),
      searchedParams: [searchInput],
    };
    let spy: any;

    beforeEach(() => {
      spy = jest.spyOn(component, 'onSearchParams');
      component.searchInput = searchInput;
      component.resultsSearched = [resultSearchedFake];
    });

    it('refresh index in list', () => {
      const indexRefresh = 0;
      component.onRefresh(indexRefresh);
      expect(spy).toHaveBeenCalledWith(
        {
          text: searchInput.text,
          clientId: searchInput.clientId,
          language: searchInput.language,
          contentType: searchInput.contentType,
        },
        indexRefresh
      );
    });

    it('refresh index not in list', () => {
      component.onRefresh(10);
      expect(spy).not.toHaveBeenCalled();
    });
  });

  describe('#onLanguageChanged', () => {
    const languages: Language[] = [
      { code: 'ar', name: 'Arabic', partial: false },
    ];
    const languageSelected = {
      code: 'en',
      name: 'English',
      partial: false,
    };
    const searchInput: TextInput = {
      text: 'test Text',
      clientId: 132,
      contentType: 'LONG_TEXT',
      language: 'en',
    };
    let spyMergePreferences: any;

    beforeEach(() => {
      component.searchInput = searchInput;
      component.languageSelected = languageSelected;
      spyMergePreferences = jest.spyOn(
        component.userService,
        'mergePreferences'
      );
    });

    it('handle changed with languages', () => {
      expect(component.languageSelected).toEqual(languageSelected);
      expect(component.searchInput.language).toEqual(searchInput.language);
      component.onLanguageChanged(languages);
      expect(component.languageSelected).toEqual(languages[0]);
      expect(component.searchInput.language).toEqual(languages[0].code);
      expect(spyMergePreferences).toHaveBeenCalledWith({
        language: languages[0].code,
      });
    });
  });

  describe('#onContentTypeChanged', () => {
    const contentTypes: ContentType[] = [
      { content: 'Long Text', value: 'LONG_TEXT' },
    ];
    const contentTypeSelected: ContentType = {
      content: 'Short Text',
      value: 'SHORT_TEXT',
    };
    const searchInput: TextInput = {
      text: 'test Text',
      clientId: 132,
      contentType: 'USERNAME',
      language: 'en',
    };
    let spyMergePreferences: any;

    beforeEach(() => {
      component.searchInput = searchInput;
      component.contentTypeSelected = contentTypeSelected;
      spyMergePreferences = jest.spyOn(
        component.userService,
        'mergePreferences'
      );
    });

    it('handle changed with contentTypes', () => {
      expect(component.contentTypeSelected).toEqual(contentTypeSelected);
      expect(component.searchInput.contentType).toEqual(
        searchInput.contentType
      );
      component.onContentTypeChanged(contentTypes);
      expect(component.contentTypeSelected).toEqual(contentTypes[0]);
      expect(component.searchInput.contentType).toEqual(contentTypes[0].value);
      expect(spyMergePreferences).toHaveBeenCalledWith({
        lastContentType: contentTypes[0].value,
      });
    });
  });

  describe('#onClientChanged', () => {
    const clients: Client[] = [{ id: 60, name: 'Twitter' }];
    const clientSelected: Client = {
      id: 0,
      name: 'Community Sift',
    };
    const searchInput: TextInput = {
      text: 'test Text',
      clientId: 132,
      contentType: 'LONG_TEXT',
      language: 'en',
    };
    let spyMergePreferences: any;

    beforeEach(() => {
      component.searchInput = searchInput;
      component.clientSelected = clientSelected;
      spyMergePreferences = jest.spyOn(
        component.userService,
        'mergePreferences'
      );
    });

    it('handle changed with clients', () => {
      expect(component.clientSelected).toEqual(clientSelected);
      expect(component.searchInput.clientId).toEqual(searchInput.clientId);
      component.onClientChanged(clients);
      expect(component.clientSelected).toEqual(clients[0]);
      expect(component.searchInput.clientId).toEqual(clients[0].id);
      expect(spyMergePreferences).toHaveBeenCalledWith({
        lastClientId: clients[0].id,
      });
      const ids = clients.map((i) => i.id);
      expect(component.clientIds).toEqual(ids);
      expect(component.selectedClients).toEqual(clients);
    });

    it('handle changed with clients empty', () => {
      component.clientIds = [60, 0];
      component.onClientChanged([]);
      expect(component.clientIds).toEqual([]);
    });
  });

  describe('#onAddANewSearch', () => {
    let spy: any;
    const searchInput: TextInput = {
      text: 'test Text',
      clientId: 132,
      contentType: 'LONG_TEXT',
      language: 'en',
    };
    const resultSearchedFake: any = {
      index: 0,
      isError: false,
      isDeep: false,
      isLoading: false,
      language: 'ja',
      extended: [],
      topics: [
        { id: 0, risk: 3, verification: undefined },
        { id: 5, risk: 3, verification: undefined },
      ],
      policies: [],
      spellingMistakes: [],
      tags: [],
      contentType: 'SHORT_TEXT',
      clientId: 0,
      onToogleMore: jest.fn(),
      searchedParams: [searchInput],
    };

    beforeEach(() => {
      spy = jest.spyOn(component, 'onSearchParams');
      component.resultsSearched = [resultSearchedFake];
      component.searchInput = searchInput;
    });

    it('add new search same searchInput', () => {
      component.clientIds = [132];
      component.onAddANewSearch();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenLastCalledWith(searchInput, 0, 1);
    });

    it('add new search not same searchInput', () => {
      component.clientIds = [0];
      component.onAddANewSearch();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenLastCalledWith(
        {
          ...searchInput,
          clientId: 0,
        },
        null,
        1
      );
    });

    it('add new search not same searchInput with miltiple clientIds', () => {
      component.clientIds = [0, 111];
      component.onAddANewSearch();
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenLastCalledWith(
        {
          ...searchInput,
          clientId: 111,
        },
        null,
        2
      );
    });
  });

  describe('#onSearchParams', () => {
    let spyHandlePolicies;
    let spyGetMistake;
    let spyGetTags;
    let spyHandleRefreshResult;
    let spyHandleAddResult;
    const searchInput: TextInput = {
      text: paramInput,
      clientId: 132,
      contentType: 'SHORT_TEXT',
      language: 'en',
    };

    beforeEach(() => {
      spyHandlePolicies = jest.spyOn(component, 'handlePolicies');
      spyGetMistake = jest.spyOn(component, 'getMistake');
      spyGetTags = jest.spyOn(component, 'getTags');
      spyHandleRefreshResult = jest.spyOn(component, 'handleRefreshResult');
      spyHandleAddResult = jest.spyOn(component, 'handleAddResult');
    });

    it('search with not indexAdd', () => {
      component.onSearchParams(searchInput);
      expect(spyHandlePolicies).toHaveBeenCalled();
      expect(spyGetMistake).toHaveBeenCalled();
      expect(spyGetTags).toHaveBeenCalled();
      expect(spyHandleAddResult).toHaveBeenCalled();
      expect(spyHandleRefreshResult).not.toHaveBeenCalled();
    });

    it('search with indexAdd', () => {
      component.onSearchParams(searchInput, 0);
      expect(spyHandlePolicies).toHaveBeenCalled();
      expect(spyGetMistake).toHaveBeenCalled();
      expect(spyGetTags).toHaveBeenCalled();
      expect(spyHandleRefreshResult).toHaveBeenCalled();
      expect(spyHandleAddResult).not.toHaveBeenCalled();
    });
  });

  describe('#handleAddResult', () => {
    let spyIndexSameResultByKey: any;
    let spyAddSearchParamByIndex: any;
    let spyMergeResultSearched: any;
    const searchInput: TextInput = {
      text: paramInput,
      clientId: 132,
      contentType: 'LONG_TEXT',
      language: 'en',
    };
    const resultSearchedFake: any = {
      index: 0,
      isError: false,
      isDeep: false,
      isLoading: false,
      language: 'ja',
      extended: [],
      topics: [
        { id: 0, risk: 3, verification: undefined },
        { id: 5, risk: 3, verification: undefined },
      ],
      policies: [],
      spellingMistakes: [],
      tags: [],
      contentType: 'SHORT_TEXT',
      clientId: 0,
      searchedParams: [searchInput],
      onToogleMore: jest.fn(),
      escalateData: {
        textSearch: '',
        topics: [],
      },
    };

    beforeEach(() => {
      spyIndexSameResultByKey = jest.spyOn(component, 'indexSameResultByKey');
      spyAddSearchParamByIndex = jest.spyOn(component, 'addSearchParamByIndex');
      spyMergeResultSearched = jest.spyOn(component, 'mergeResultSearched');
      component.resultsSearched = [resultSearchedFake];
    });

    it('add result to resultsSearched other topics', () => {
      const resultSearchedFake2 = {
        ...resultSearchedFake,
        topics: [
          { id: 0, risk: 5, verification: undefined },
          { id: 5, risk: 5, verification: undefined },
        ],
      };
      expect(component.resultsSearched).toHaveLength(1);
      component.handleAddResult(resultSearchedFake2, searchInput);
      expect(spyIndexSameResultByKey).toHaveBeenCalled();
      expect(spyAddSearchParamByIndex).not.toHaveBeenCalled();
      expect(spyMergeResultSearched).not.toHaveBeenCalled();
      expect(component.resultsSearched).toHaveLength(2);
    });

    it('add result already exists in the list with same searchInput', () => {
      component.handleAddResult(resultSearchedFake, searchInput);
      expect(spyAddSearchParamByIndex).not.toHaveBeenCalled();
      expect(spyMergeResultSearched).toHaveBeenCalled();
    });

    it('add result already exists in the list with not same searchInput', () => {
      component.handleAddResult(resultSearchedFake, {
        text: paramInput,
        clientId: 60,
        contentType: 'LONG_TEXT',
        language: 'ja',
      });
      expect(spyAddSearchParamByIndex).toHaveBeenCalled();
      expect(spyMergeResultSearched).not.toHaveBeenCalled();
    });
  });

  describe('#handleRefeshResult', () => {
    let spyHideLoading;
    let spyIndexSameQuery;
    let spyAddSearchParam;
    let spyMergeResultSearched;
    let spySameResultByKey;
    let spyRemoveSearchParam;
    const searchInput: TextInput = {
      text: paramInput,
      clientId: 132,
      contentType: 'LONG_TEXT',
      language: 'en',
    };
    const resultSearchedFake: any = {
      index: 0,
      isError: false,
      isDeep: false,
      isLoading: false,
      language: 'ja',
      extended: [],
      topics: [
        { id: 0, risk: 3, verification: undefined },
        { id: 5, risk: 3, verification: undefined },
      ],
      policies: [],
      spellingMistakes: [],
      tags: [],
      contentType: 'SHORT_TEXT',
      clientId: 0,
      searchedParams: [searchInput],
      onToogleMore: jest.fn(),
    };

    beforeEach(() => {
      spyHideLoading = jest.spyOn(component, 'hideLoading');
      spyIndexSameQuery = jest.spyOn(component, 'indexSameQuery');
      spyAddSearchParam = jest.spyOn(component, 'addSearchParamByIndex');
      spyMergeResultSearched = jest.spyOn(component, 'mergeResultSearched');
      spySameResultByKey = jest.spyOn(component, 'indexSameResultByKey');
      spyRemoveSearchParam = jest.spyOn(component, 'removeSearchParam');

      component.resultsSearched = [resultSearchedFake];
    });

    it('call methods when result same resultsSearched[indexAdd] with same searchInput', () => {
      const indexAdd = 0;
      component.handleRefreshResult(resultSearchedFake, searchInput, indexAdd);
      expect(spyHideLoading).toHaveBeenCalled();
      expect(spyIndexSameQuery).toHaveBeenCalledWith(searchInput, indexAdd);
      expect(spyAddSearchParam).not.toHaveBeenCalled();
      expect(spyMergeResultSearched).toHaveBeenCalledWith(
        resultSearchedFake,
        indexAdd
      );
      expect(component.resultsSearched).toHaveLength(1);
    });

    it('call methods when result same resultsSearched[indexAdd] with not same searchInput', () => {
      const indexAdd = 0;
      const searchInputNotSame: TextInput = {
        text: paramInput,
        clientId: 60,
        contentType: 'LONG_TEXT',
        language: 'ja',
      };
      component.handleRefreshResult(
        resultSearchedFake,
        searchInputNotSame,
        indexAdd
      );
      expect(spyHideLoading).toHaveBeenCalled();
      expect(spyIndexSameQuery).toHaveBeenCalledWith(
        searchInputNotSame,
        indexAdd
      );
      expect(spyAddSearchParam).toHaveBeenCalledWith(
        searchInputNotSame,
        indexAdd
      );
      expect(spyMergeResultSearched).toHaveBeenCalledWith(
        resultSearchedFake,
        indexAdd
      );
      expect(component.resultsSearched).toHaveLength(1);
    });

    it('call methods when result not same resultsSearched[indexAdd] with topics in list with same searchInput', () => {
      const resultSearchedFake2 = {
        ...resultSearchedFake,
        topics: [
          { id: 0, risk: 5, verification: undefined },
          { id: 5, risk: 5, verification: undefined },
        ],
      };
      const indexAdd = 0;
      expect(component.resultsSearched).toHaveLength(1);
      component.handleRefreshResult(resultSearchedFake2, searchInput, indexAdd);
      expect(spySameResultByKey).toHaveBeenCalledWith(
        resultSearchedFake2,
        'topics'
      );
      expect(spyRemoveSearchParam).toHaveBeenCalledWith(indexAdd, 0);
      expect(component.resultsSearched).toHaveLength(2);
    });

    it('call methods when result not same resultsSearched[indexAdd] with topics in list with not same searchInput', () => {
      const searchInputNotSame: TextInput = {
        text: paramInput,
        clientId: 60,
        contentType: 'LONG_TEXT',
        language: 'ja',
      };
      const resultSearchedFake2 = {
        ...resultSearchedFake,
        topics: [
          { id: 0, risk: 5, verification: undefined },
          { id: 5, risk: 5, verification: undefined },
        ],
      };
      expect(component.resultsSearched).toHaveLength(1);
      component.handleRefreshResult(resultSearchedFake2, searchInputNotSame, 0);
      expect(spySameResultByKey).toHaveBeenCalledWith(
        resultSearchedFake2,
        'topics'
      );
      expect(component.resultsSearched).toHaveLength(1);
    });

    it('call methods when result not same resultsSearched[indexAdd] but same in list results with same searchInput', () => {
      const searchInput2: TextInput = {
        text: paramInput,
        clientId: 132,
        contentType: 'LONG_TEXT',
        language: 'en',
      };
      const resultSearchedFake2 = {
        ...resultSearchedFake,
        searchedParams: [searchInput2],
        topics: [
          { id: 0, risk: 5, verification: undefined },
          { id: 5, risk: 5, verification: undefined },
        ],
      };

      component.resultsSearched = [resultSearchedFake, resultSearchedFake2];

      component.handleRefreshResult(resultSearchedFake2, searchInput, 0);
      expect(spyIndexSameQuery).toHaveBeenCalledWith(searchInput, 1);
      expect(spyMergeResultSearched).toHaveBeenCalledWith(
        resultSearchedFake2,
        1
      );
    });

    it('call methods when result not same resultsSearched[indexAdd] but same in list results with not same searchInput', () => {
      const searchInput: TextInput = {
        text: paramInput,
        clientId: 60,
        contentType: 'USERNAME',
        language: 'ja',
      };
      const resultSearchedFake2 = {
        ...resultSearchedFake,
        searchedParams: [
          {
            text: paramInput,
            clientId: 132,
            contentType: 'SHORT_TEXT',
            language: 'ja',
          },
        ],
        topics: [
          { id: 0, risk: 5, verification: undefined },
          { id: 5, risk: 5, verification: undefined },
        ],
      };

      component.resultsSearched = [resultSearchedFake, resultSearchedFake2];

      component.handleRefreshResult(resultSearchedFake2, searchInput, 0);
      expect(spyIndexSameQuery).toHaveBeenCalledWith(searchInput, 1);
      expect(spyAddSearchParam).toHaveBeenCalledWith(searchInput, 1);
    });

    it('call methods when result not same resultsSearched[indexAdd] but same in list results with not same searchInput and same searchInput resultsSearched[indexAdd]', () => {
      const resultSearchedFake2 = {
        ...resultSearchedFake,
        searchedParams: [
          {
            text: paramInput,
            clientId: 132,
            contentType: 'SHORT_TEXT',
            language: 'ja',
          },
        ],
        topics: [
          { id: 0, risk: 5, verification: undefined },
          { id: 5, risk: 5, verification: undefined },
        ],
      };

      component.resultsSearched = [resultSearchedFake, resultSearchedFake2];

      component.handleRefreshResult(resultSearchedFake2, searchInput, 0);
      expect(spyIndexSameQuery).toHaveBeenCalledWith(searchInput, 1);
      expect(spyAddSearchParam).toHaveBeenCalledWith(searchInput, 1);
    });
  });

  describe('#addSearchParamByIndex', () => {
    it('add searchedParam', () => {
      component.resultsSearched = [
        {
          index: 0,
          isError: false,
          isDeep: false,
          isLoading: false,
          language: 'ja',
          extended: [],
          topics: [
            { id: 0, risk: 3, verification: undefined },
            { id: 5, risk: 3, verification: undefined },
          ],
          policies: [],
          spellingMistakes: [],
          tags: [],
          contentType: 'SHORT_TEXT',
          clientId: 0,
          searchedParams: [],
          onToogleMore: jest.fn(),
          escalateData: {
            textSearch: '',
            topics: [],
          },
        },
      ];
      const indexResult = 0;
      expect(
        component.resultsSearched[indexResult].searchedParams
      ).toHaveLength(0);
      component.addSearchParamByIndex(
        {
          text: paramInput,
          clientId: 132,
          contentType: 'LONG_TEXT',
          language: 'ja',
        },
        indexResult
      );
      expect(
        component.resultsSearched[indexResult].searchedParams
      ).toHaveLength(1);
    });
  });

  describe('#removeSearchParam', () => {
    it('remove searchParam', () => {
      const searchInput: TextInput = {
        text: paramInput,
        clientId: 132,
        contentType: 'LONG_TEXT',
        language: 'ja',
      };
      const resultSearchedFake: any = {
        index: 0,
        isError: false,
        isDeep: false,
        isLoading: false,
        language: 'ja',
        extended: [],
        topics: [
          { id: 0, risk: 3, verification: undefined },
          { id: 5, risk: 3, verification: undefined },
        ],
        policies: [],
        spellingMistakes: [],
        tags: [],
        contentType: 'SHORT_TEXT',
        clientId: 0,
        searchedParams: [searchInput],
        onToogleMore: jest.fn(),
      };
      component.resultsSearched = [resultSearchedFake];
      expect(component.resultsSearched[0].searchedParams).toHaveLength(1);
      component.removeSearchParam(0, 0);
      expect(component.resultsSearched[0].searchedParams).toHaveLength(0);
    });
  });

  describe('#mergeResultSearched', () => {
    const resultSearchedFake: any = {
      index: 0,
      isError: false,
      isDeep: false,
      isLoading: false,
      language: 'ja',
      extended: [],
      topics: [
        { id: 0, risk: 3, verification: undefined },
        { id: 5, risk: 3, verification: undefined },
      ],
      policies: [],
      spellingMistakes: [],
      tags: [],
      contentType: 'SHORT_TEXT',
      clientId: 0,
      searchedParams: [],
      onToogleMore: jest.fn(),
    };
    const resultSearchedFake2: any = {
      index: 0,
      isError: false,
      isDeep: false,
      isLoading: false,
      language: 'en',
      extended: [],
      topics: [
        { id: 0, risk: 3, verification: undefined },
        { id: 5, risk: 3, verification: undefined },
      ],
      policies: [],
      spellingMistakes: [],
      tags: [],
      contentType: 'SHORT_TEXT',
      clientId: 132,
      searchedParams: [],
      onToogleMore: jest.fn(),
    };

    beforeEach(() => {
      component.resultsSearched = [resultSearchedFake];
    });

    it('merge/update resultSearched', () => {
      expect(component.resultsSearched[0]).toEqual(
        expect.objectContaining({
          language: resultSearchedFake.language,
          clientId: resultSearchedFake.clientId,
        })
      );
      component.mergeResultSearched(resultSearchedFake2, 0);
      expect(component.resultsSearched[0]).toEqual(
        expect.objectContaining({
          language: resultSearchedFake2.language,
          clientId: resultSearchedFake2.clientId,
        })
      );
    });
  });

  describe('#indexSameResultByKey', () => {
    beforeEach(() => {
      component.resultsSearched = [
        {
          index: 0,
          isError: false,
          isDeep: false,
          isLoading: false,
          language: 'ja',
          extended: [],
          topics: [
            { id: 0, risk: 3, verification: undefined },
            { id: 5, risk: 3, verification: undefined },
          ],
          policies: [],
          spellingMistakes: [],
          tags: [],
          contentType: 'SHORT_TEXT',
          clientId: 0,
          searchedParams: [],
          onToogleMore: jest.fn(),
          escalateData: {
            textSearch: '',
            topics: [],
          },
        },
        {
          index: 1,
          isError: false,
          isDeep: false,
          isLoading: false,
          language: 'en',
          extended: [],
          topics: [
            { id: 0, risk: 5, verification: undefined },
            { id: 5, risk: 5, verification: undefined },
          ],
          policies: [],
          spellingMistakes: [],
          tags: [],
          contentType: 'SHORT_TEXT',
          clientId: 0,
          searchedParams: [],
          onToogleMore: jest.fn(),
          escalateData: {
            textSearch: '',
            topics: [],
          },
        },
      ];
    });

    it('topics is same resultsSearched', () => {
      expect(
        component.indexSameResultByKey({
          topics: [
            { id: 0, risk: 3, verification: undefined },
            { id: 5, risk: 3, verification: undefined },
          ],
        })
      ).toEqual(0);
      expect(
        component.indexSameResultByKey({
          topics: [
            { id: 0, risk: 5, verification: undefined },
            { id: 5, risk: 5, verification: undefined },
          ],
        })
      ).toEqual(1);
    });

    it('topics is not the same resultsSearched', () => {
      expect(
        component.indexSameResultByKey({
          topics: [
            { id: 0, risk: 0, verification: undefined },
            { id: 5, risk: 0, verification: undefined },
          ],
        })
      ).toEqual(-1);
    });

    it('language is same resultsSearched', () => {
      expect(
        component.indexSameResultByKey({ language: 'en' }, 'language')
      ).toEqual(1);
    });
  });

  describe('#indexSameQuery', () => {
    const searchInput = {
      text: 'test Text',
      clientId: 0,
      contentType: 'LONG_TEXT',
      language: 'en',
    };

    beforeEach(() => {
      component.resultsSearched = [
        {
          index: 0,
          isError: false,
          isDeep: false,
          isLoading: false,
          language: 'ja',
          extended: [],
          topics: [],
          policies: [],
          spellingMistakes: [],
          tags: [],
          contentType: 'SHORT_TEXT',
          clientId: 0,
          searchedParams: [
            {
              text: 'test Text',
              clientId: 132,
              contentType: 'LONG_TEXT',
              language: 'ja',
            },
            searchInput,
          ],
          onToogleMore: jest.fn(),
          escalateData: {
            textSearch: '',
            topics: [],
          },
        },
      ];
    });

    it('passed into the same query', () => {
      const indexSameQuery = component.indexSameQuery(searchInput, 0);
      expect(indexSameQuery).toEqual(1);
    });

    it("don't passed into the same query", () => {
      const indexSameQuery2 = component.indexSameQuery(
        {
          text: 'test Text',
          clientId: 60,
          contentType: 'LONG_TEXT',
          language: 'vn',
        },
        0
      );
      expect(indexSameQuery2).toEqual(-1);
    });
  });

  describe('#getClientName', () => {
    beforeEach(() => {
      component.clients = [
        { id: 0, name: 'Community Sift' },
        { id: 132, name: 'Habbo' },
        { id: 60, name: 'Twitter' },
      ];
    });

    it('getClientName by id in list', () => {
      const twitter = component.getClientName(60);
      expect(twitter).toEqual('Twitter');
      const habbo = component.getClientName(132);
      expect(habbo).toEqual('Habbo');
      const sift = component.getClientName(0);
      expect(sift).toEqual('Community Sift');
    });

    it('get id is not in the list', () => {
      const idNull = 100;
      const notInList = component.getClientName(idNull);
      expect(notInList).toEqual(idNull);
    });
  });

  describe('#getContentType', () => {
    beforeEach(() => {
      component.contentTypeList = [
        { content: 'Short Text', value: 'SHORT_TEXT' },
        { content: 'Long Text', value: 'LONG_TEXT' },
        { content: 'User Name', value: 'USERNAME' },
      ];
    });

    it('get content SHORT_TEXT LONG_TEXT USERNAME', () => {
      const contentShort = component.getContentType('SHORT_TEXT');
      expect(contentShort).toEqual('Short Text');
      const contentLong = component.getContentType('LONG_TEXT');
      expect(contentLong).toEqual('Long Text');
      const contentUsername = component.getContentType('USERNAME');
      expect(contentUsername).toEqual('User Name');
    });

    it('get content not existed yet', () => {
      const VALUE_NULL = 'VALUE_NULL';
      const contentNull = component.getContentType(VALUE_NULL);
      expect(contentNull).toEqual(VALUE_NULL);
    });
  });

  describe('#getResultTitle', () => {
    it('one searchedParams', () => {
      const searchedParams = [
        {
          text: 'oh shit',
          clientId: 60,
          contentType: 'SHORT_TEXT',
          language: 'ja',
        },
      ];
      const title = component.getResultTitle(searchedParams);
      expect(title).toEqual('ja Short Text on Twitter');
    });

    it('multiple searchedParams', () => {
      const searchedParams = [
        {
          text: 'oh shit',
          clientId: 60,
          contentType: 'SHORT_TEXT',
          language: 'ja',
        },
        {
          text: 'oh shit',
          clientId: 0,
          contentType: 'SHORT_TEXT',
          language: 'ja',
        },
        {
          text: 'oh shit',
          clientId: 132,
          contentType: 'USERNAME',
          language: 'en',
        },
      ];
      const title = component.getResultTitle(searchedParams);
      expect(title).toEqual(
        'ja, en Short Text, User Name on Twitter, Community Sift, Habbo'
      );
    });
  });

  describe('#onClientClosed', () => {
    it('call methods', () => {
      const spyHandleEmptyClient = jest.spyOn(component, 'handleEmptyClient');
      const spyCheckSameParams = jest.spyOn(component, 'checkSameParams');

      component.onClientClosed();
      expect(spyHandleEmptyClient).toHaveBeenCalled();
      expect(spyCheckSameParams).toHaveBeenCalled();
    });
  });

  describe('#onLanguageClosed', () => {
    it('call methods', () => {
      const spyCheckSameParams = jest.spyOn(component, 'checkSameParams');

      component.onLanguageClosed();
      expect(spyCheckSameParams).toHaveBeenCalled();
    });
  });

  describe('#onContentTypeClosed', () => {
    it('call methods', () => {
      const spyCheckSameParams = jest.spyOn(component, 'checkSameParams');

      component.onContentTypeClosed();
      expect(spyCheckSameParams).toHaveBeenCalled();
    });
  });

  describe('#handleEmptyClient', () => {
    const clientSelected = {
      id: 60,
      name: 'Twitter',
    };
    beforeEach(() => {
      component.selectedClients = [];
      component.clientSelected = clientSelected;
    });

    it('when clientIds empty', () => {
      component.clientIds = [];
      component.handleEmptyClient();
      expect(component.selectedClients).toEqual([clientSelected]);
      expect(component.clientIds).toEqual([clientSelected.id]);
    });

    it('when clientIds is not empty', () => {
      component.clientIds = [132];
      component.handleEmptyClient();
      expect(component.selectedClients).toEqual([]);
      expect(component.clientIds).toEqual([132]);
    });
  });

  describe('#checkSameParams', () => {
    let spyIndexSameQuery: any;
    const searchInput: TextInput = {
      text: paramInput,
      clientId: 132,
      contentType: 'LONG_TEXT',
      language: 'en',
    };
    beforeEach(() => {
      spyIndexSameQuery = jest.spyOn(component, 'indexSameQuery');
      component.searchInput = searchInput;
      component.resultsSearched = [
        {
          index: 0,
          isError: false,
          isDeep: false,
          isLoading: false,
          language: 'ja',
          extended: [],
          topics: [
            { id: 0, risk: 3, verification: undefined },
            { id: 5, risk: 3, verification: undefined },
          ],
          policies: [],
          spellingMistakes: [],
          tags: [],
          contentType: 'SHORT_TEXT',
          clientId: 0,
          searchedParams: [searchInput],
          onToogleMore: jest.fn(),
          escalateData: {
            textSearch: '',
            topics: [],
          },
        },
      ];
    });

    it('check and show warning', () => {
      component.clientIds = [132];
      expect(component.compareInputMsg).toEqual(
        expect.objectContaining({
          isShow: false,
          content: '',
        })
      );
      component.checkSameParams();
      expect(spyIndexSameQuery).toHaveBeenCalled();
      expect(component.compareInputMsg).toEqual(
        expect.objectContaining({
          isShow: true,
          content: 'Search condition already exists !',
        })
      );
    });

    it("check and don't show warning", () => {
      component.clientIds = [0];
      component.checkSameParams();
      expect(spyIndexSameQuery).toHaveBeenCalled();
      expect(component.compareInputMsg).toEqual(
        expect.objectContaining({
          isShow: false,
          content: '',
        })
      );
    });

    it('check when clientIds empty', () => {
      component.clientIds = [];
      expect(spyIndexSameQuery).not.toHaveBeenCalled();
    });
  });

  describe('#ngOnDestroy', () => {
    it('Subcription is close', () => {
      component.ngOnInit();
      expect(component.subscriptions.closed).toBe(false);
      component.ngOnDestroy();
      expect(component.subscriptions.closed).toBe(true);
    });
  });
});
