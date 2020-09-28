import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { Slots } from 'classify-text-swagger-client';
import { RiskLevelToColorPipe } from 'src/app/pipes';
import { DiagnoseTextComponent, Word } from './diagnose-text.component';
import 'hammerjs';

const extended: Array<Slots> = [
  {
    original: 'hello',
    text: 'hello',
    solution: 'hello',
    tokens: [
      {
        text: 'hello',
        topics: { _0: 0 },
        language: 'ar',
        altSpellings: [],
        altSenses: [],
        leetMapping: [],
        taskIds: [],
        dateCreated: 0,
        dateUpdated: 0,
        clientId: 0,
      },
    ],
  },
  {
    original: 'world',
    text: 'world',
    solution: 'world',
    tokens: [
      {
        text: 'world',
        topics: { _0: 1 },
        language: 'ar',
        altSpellings: [],
        altSenses: [],
        leetMapping: [],
        taskIds: [],
        dateCreated: 0,
        dateUpdated: 0,
        clientId: 0,
      },
    ],
  },
];

let wordDiagnosed: Array<Word> | any;

describe.skip('DiagnoseTextComponent', () => {
  let component: DiagnoseTextComponent;
  let fixture: ComponentFixture<DiagnoseTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      declarations: [DiagnoseTextComponent, RiskLevelToColorPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnoseTextComponent);
    component = fixture.componentInstance;
    component.extended = extended;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('onEventDown() method should call handleGroupWord() method', () => {
      const mockListener = jest.spyOn(component, 'handleGroupWord');
      const spy = mockListener.mockImplementation(() => {
        return wordDiagnosed;
        expect(spy).toHaveBeenCalled();
      });
      component.ngOnInit();
    });
  });

  describe('#handleGroupWord', () => {
    it('should be return array Word', () => {
      component.handleGroupWord(component.extended);
    });
  });

  describe('#onClickSolution', () => {
    it('Item-solution is active when previous value is false and Item-solution is deactive when click again itseft', () => {
      component.onClickSolution(1, false);
      expect(component.activeSolution[1]).toBe(true);
      expect(component.activeSolution[2]).toBe(undefined);
      expect(component.activeSolution[3]).toBe(undefined);

      component.onClickSolution(1, true);
      expect(component.activeSolution[1]).toBe(false);
      expect(component.activeSolution[2]).toBe(undefined);
      expect(component.activeSolution[3]).toBe(undefined);

      component.onClickSolution(2, true);
      expect(component.activeSolution[2]).toBe(false);
      expect(component.activeSolution[1]).toBe(undefined);
      expect(component.activeSolution[3]).toBe(undefined);

      component.onClickSolution(2, false);
      expect(component.activeSolution[2]).toBe(true);
      expect(component.activeSolution[1]).toBe(undefined);
      expect(component.activeSolution[3]).toBe(undefined);
    });
  });

  describe('#onEventDown', () => {
    it('onEventDown() method should call preventDefault() method', () => {
      const mockListener = jest.spyOn(component, 'preventDefault');
      const spy = mockListener.mockImplementation(() => {
        expect(spy).toHaveBeenCalled();
      });

      component.eventMouseDown(new Event(''), 1);
    });

    it('Selected item of box-origin should update when mousedown', () => {
      component.eventMouseDown(new Event(''), 1);
      expect(component.highLightData.selected[1]).toBe(true);
      expect(component.highLightData.selected[2]).toBe(undefined);
      expect([...component.highLightData.items][0]).toBe(1);
      expect([...component.highLightData.items][1]).toBe(undefined);

      component.eventMouseDown(new Event(''), 2);
      expect(component.highLightData.selected[2]).toBe(true);
      expect(component.highLightData.selected[1]).toBe(undefined);
      expect([...component.highLightData.items][0]).toBe(2);
      expect([...component.highLightData.items][1]).toBe(undefined);
    });
  });

  describe('Click and Holding to choose token', () => {
    it('Group token when clicked and holding to other token', () => {
      const mockListener = jest.spyOn(component, 'pasDataToHighLightComponent');
      const spy = mockListener.mockImplementation(() => {
        expect(spy).toHaveBeenCalled();
      });

      component.eventMouseDown(new Event(''), 1);
      component.eventMouseover(2);
      component.eventMouseup();
      expect(component.highLightData.isShowViewDialog).toBe(true);
    });

    it('Group token when clicked and holding', () => {
      const mockListener = jest.spyOn(component, 'pasDataToHighLightComponent');
      const spy = mockListener.mockImplementation(() => {
        expect(spy).toHaveBeenCalledTimes(1);
      });

      component.eventMouseDown(new Event(''), 1);
      component.eventMouseover(1);
      component.eventMouseup();
      expect(component.highLightData.isShowViewDialog).toBe(true);
    });
  });

  describe.skip('#onChangeToken', () => {
    it('Text value of word will change when click token', () => {
      const wordDiagnosed = [
        {
          text: 'eggs',
          tokens: [
            {
              text: 'egs',
            },
            {
              text: 'eggs',
            },
          ],
        },
        {
          text: 'years',
          tokens: [
            {
              text: 'years',
            },
            {
              text: 'years,',
            },
          ],
        },
      ];
      component.wordDiagnosed = wordDiagnosed;
      // component.onChangeToken(0, 'eggs');
      expect(component.wordDiagnosed[0]['text']).toBe('eggs');
      // component.onChangeToken(1, 'years');
      expect(component.wordDiagnosed[1]['text']).toBe('years');
    });
  });

  describe('#pasDataToHighLightComponent', () => {
    it('', () => {
      const arr = [0, 1];
      component.pasDataToHighLightComponent(arr);
      expect(component.data.items).toEqual([0, 1]);
    });
  });

  describe('#eventTouchPan', () => {
    const spyElemFromPoint = jest.fn();
    let spyContains;
    let spyEventMouseover;

    beforeEach(() => {
      Object.defineProperty(window.document, 'elementFromPoint', {
        value: spyElemFromPoint,
      });
      spyContains = jest.spyOn(
        component.diagnoseTextView.nativeElement,
        'contains'
      );
      spyEventMouseover = jest.spyOn(component, 'eventMouseover');
    });

    it('touch with element children', () => {
      const center = { x: 11, y: 11 };
      const mouseenter = {
        center,
      };
      const fakeId = 1;
      const fakeElement = {
        getAttribute: () => fakeId,
      };
      spyContains.mockImplementationOnce(() => true);
      spyElemFromPoint.mockImplementationOnce(() => fakeElement);

      component.eventTouchPan(mouseenter);
      expect(spyElemFromPoint).toHaveBeenCalledWith(center.x, center.y);
      expect(spyContains).toHaveBeenCalledWith(fakeElement);
      expect(spyContains).toHaveLastReturnedWith(true);
      expect(spyEventMouseover).toHaveBeenCalledWith(fakeId);
    });

    it('touch with element children but not id', () => {
      const center = { x: 11, y: 11 };
      const mouseenter = {
        center,
      };
      const fakeId = null;
      const fakeElement = {
        getAttribute: () => fakeId,
      };
      spyContains.mockImplementationOnce(() => true);
      spyElemFromPoint.mockImplementationOnce(() => fakeElement);

      component.eventTouchPan(mouseenter);
      expect(spyElemFromPoint).toHaveBeenCalledWith(center.x, center.y);
      expect(spyContains).toHaveBeenCalledWith(fakeElement);
      expect(spyContains).toHaveLastReturnedWith(true);
      expect(spyEventMouseover).not.toHaveBeenCalled();
    });

    it('touch without element children', () => {
      const center = { x: 11, y: 11 };
      const mouseenter = {
        center,
      };
      const fakeId = 1;
      const fakeElement = {
        getAttribute: () => fakeId,
      };
      spyContains.mockImplementationOnce(() => false);
      spyElemFromPoint.mockImplementationOnce(() => fakeElement);

      component.eventTouchPan(mouseenter);
      expect(spyElemFromPoint).toHaveBeenCalledWith(center.x, center.y);
      expect(spyContains).toHaveBeenCalledWith(fakeElement);
      expect(spyContains).toHaveLastReturnedWith(false);
      expect(spyEventMouseover).not.toHaveBeenCalled();
    });
  });
});
