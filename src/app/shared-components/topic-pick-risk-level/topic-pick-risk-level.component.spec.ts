import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TopicPickRiskLevelComponent } from './topic-pick-risk-level.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ITopic } from '../interfaces';

const topics: Array<ITopic> = [
  {
    id: 0,
    risk: 5,
  },
  {
    id: 5,
    risk: 5,
  },
];

const highlightTopics = { 0: 5, 5: 5 };

describe('TopicListSidePanelComponent', () => {
  let component: TopicPickRiskLevelComponent;
  let fixture: ComponentFixture<TopicPickRiskLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopicPickRiskLevelComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicPickRiskLevelComponent);
    component = fixture.componentInstance;
    component.topics = topics;
    component.highlightTopics = highlightTopics;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onChangeLevel', () => {
    it('should be call event emit when change risk of topic', () => {
      spyOn(component.changeRiskLevel, 'emit');
      component.onChangeLevel(1, 0);
      expect(component.changeRiskLevel.emit).toHaveBeenCalled();
      expect(component.changeRiskLevel.emit).toHaveBeenCalledWith({
        '1': 0,
      });

      component.onChangeLevel(0, 0);
      expect(component.changeRiskLevel.emit).toHaveBeenCalled();
      expect(component.changeRiskLevel.emit).toHaveBeenCalledWith({
        '0': 0,
      });
    });

    it('should be call event when clicked button and readonly is false', fakeAsync(() => {
      spyOn(component.changeRiskLevel, 'emit');
      const submitEl = fixture.debugElement.query(
        By.css('[data-test="topic-level"]')
      );
      submitEl.triggerEventHandler('click', null);
      tick();
      fixture.detectChanges();
      expect(component.changeRiskLevel.emit).toHaveBeenCalled();
    }));

    it('should be not call event when clicked button and readonly is true', fakeAsync(() => {
      component.readonly = true;
      spyOn(component.changeRiskLevel, 'emit');
      const submitEl = fixture.debugElement.query(
        By.css('[data-test="topic-level"]')
      );
      submitEl.triggerEventHandler('click', null);
      tick();
      expect(component.changeRiskLevel.emit).not.toHaveBeenCalled();
    }));

    it(`Topic ${topics[0].id} should be have bg-risk-${topics[0].risk} class`, () => {
      expect(
        component.getRiskClasses(topics[0], { key: 5, value: { name: '' } })
      ).toContain('bg-risk-5');
      expect(
        component.getRiskClasses(topics[0], { key: 1, value: { name: '' } })
      ).not.toContain('bg-risk-5');
    });
  });
});
