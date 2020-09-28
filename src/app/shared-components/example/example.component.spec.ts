import {
  async,
  ComponentFixture,
  fakeAsync,
  inject,
  TestBed,
} from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ExampleComponent } from './example.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ExampleService } from './example.service';
import { of } from 'rxjs';
import { ITopic } from '../interfaces';
import { HighlightDirective } from '../highlight-directive/highlight.directive';

const topic: ITopic = {
  id: 2,
  risk: 1,
};

const example = {
  data: {
    text: '',
    contentType: null,
    onCount: 1,
  },
  queueItem: {
    clientId: 1,
    comments: [],
    contentId: '2',
    dateCreated: 0,
    decisions: [],
    language: { language: '' },
    prediction: [],
    priority: -1,
    pseudonymizedDate: -1,
    redacted: {},
    reviewsNeeded: 0,
    simplified: '',
    tags: [],
    topics: [topic],
  },
};

class MockExampleService {
  deleteExample() {
    return of(() => {
      return {};
    });
  }

  redactExample() {
    return of();
  }
}

function redactOrDeleteComponent(component, shiftKey) {
  spyOn(component.exampleRedacted, 'emit').and.callFake(() => {
    return;
  });
  spyOn(component.exampleDeleted, 'emit').and.callFake(() => {
    return;
  });
  window.confirm = jest.fn(() => {
    return true;
  });
  const mockEvent: any = new Event('click');
  mockEvent.shiftKey = shiftKey;
  component.redactOrDelete(mockEvent);
}

describe('ExampleComponent', () => {
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective, ExampleComponent],
      imports: [CommonModule, FormsModule, RouterModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: ExampleService, useClass: MockExampleService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
    component.example = example;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#onRiskChanged', () => {
    it('should call "riskChanged"', () => {
      spyOn(component.riskChanged, 'emit').and.callFake(() => {
        return;
      });
      component.onRiskChanged(topic);
      expect(component.riskChanged.emit).toBeCalledWith(topic);
    });
  });

  describe('#onTopicRemoved', () => {
    it('should call "onTopicRemoved"', () => {
      spyOn(component.topicsUpdated, 'emit').and.callFake(() => {
        return;
      });
      component.onTopicRemoved(topic);
      expect(component.topicsUpdated.emit).toBeCalledWith([]);
    });
  });

  describe('#redactOrDelete', () => {
    it('should delete example', fakeAsync(() => {
      redactOrDeleteComponent(component, true);

      fixture.whenStable().then(() => {
        expect(component.exampleDeleted.emit).toBeCalledWith(
          example.queueItem.contentId
        );
        expect(component.example).toStrictEqual({
          data: {
            text: '[DELETED]',
          },
          queueItem: {
            clientId: -1,
            comments: [],
            contentId: '',
            dateCreated: 0,
            decisions: [],
            language: { language: '' },
            prediction: [],
            priority: -1,
            pseudonymizedDate: -1,
            redacted: {},
            reviewsNeeded: 0,
            simplified: '',
            tags: [],
            topics: [],
          },
        });
      });
    }));
  });

  it('should call redact example', fakeAsync(() => {
    redactOrDeleteComponent(component, false);
    fixture.whenStable().then(() => {
      expect(component.exampleRedacted.emit).toBeCalledWith(
        example.queueItem.contentId
      );
    });
  }));

  it('should sent warning massage in console if server returns error', fakeAsync(
    inject([ExampleService], (service: ExampleService) => {
      const error = new Error('test');
      service.redactExample = jest.fn().mockImplementationOnce(() => {
        throw error;
      });
      console.warn = jest.fn();
      redactOrDeleteComponent(component, false);
      fixture.whenStable().then(() => {
        expect(console.warn).toBeCalledWith(error);
      });
    })
  ));
});
