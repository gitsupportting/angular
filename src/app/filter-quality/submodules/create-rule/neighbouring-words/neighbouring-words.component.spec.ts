import {
  async,
  ComponentFixture,
  TestBed,
  inject,
} from '@angular/core/testing';

import { NeighbouringWordsComponent } from './neighbouring-words.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { CreateRuleRoutingModule } from '../create-rule-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { CreateRuleDashboardComponent } from '../create-rule-dashboard/create-rule-dashboard.component';
import { FixSpellingComponent } from '../fix-spelling/fix-spelling.component';
import { CreateRuleService } from '../create-rule.service';
import { EnterTextComponent } from '../enter-text/enter-text.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.service';

class MockCheckinNeighboringWords {
  checkinNeighboringWords() {
    return of({
      status: 200,
      left: [
        { total: 100, text: 'your' },
        { total: 80, text: 'my' },
        { total: 60, text: 'loosely tamed' },
      ],
      right: [
        { total: 200, text: 'everyday' },
        { total: 10, text: 'in my house' },
      ],
    });
  }
}

describe('NeighbouringWordsComponent', () => {
  let component: NeighbouringWordsComponent;
  let fixture: ComponentFixture<NeighbouringWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreateRuleDashboardComponent,
        FixSpellingComponent,
        NeighbouringWordsComponent,
        EnterTextComponent,
      ],
      imports: [
        RouterTestingModule,
        CommonModule,
        CreateRuleRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedComponentsModule,
        HttpClientModule,
      ],
      providers: [
        CreateRuleService,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({
              text: 'Test;',
              step: 1,
            }),
            routeConfig: { path: '/' },
          },
        },
        {
          provide: ApiService,
          useClass: MockCheckinNeighboringWords,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeighbouringWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get left and right words', () => {
    component.getNeighboringWords();
    expect(component.startWords.length).toBe(3);
    expect(component.endWords.length).toBe(2);
    expect(component.startWords).toStrictEqual(['your', 'my', 'loosely tamed']);
    expect(component.endWords).toStrictEqual(['everyday', 'in my house']);
  });

  it('should update text with start word', async(() => {
    component.inputText = 'bad words';
    component.onAddStartWord('your');
    expect(component.inputText).toBe('your bad words');
  }));

  it('should update text with end word', async(() => {
    component.inputText = 'bad words';
    component.onAddEndWord('are bad');
    expect(component.inputText).toBe('bad words are bad');
  }));

  it('should call open in new window', async(() => {
    window.open = jest.fn();
    component.onOpenNewButton();
    expect(window.open).toBeCalledTimes(1);
  }));

  it('should navigate with updated text on adding a start word ', async(
    inject(
      [ActivatedRoute, CreateRuleService, Router],
      (
        activatedRoute: ActivatedRoute,
        createRuleService: CreateRuleService,
        router: Router
      ) => {
        spyOn(router, 'navigate');
        component.inputText = 'bad words';
        const startWord = 'your';
        component.onAddStartWord(startWord);
        expect(router.navigate).toHaveBeenCalledTimes(1);
        expect(router.navigate).toHaveBeenCalledWith(['/'], {
          queryParams: { text: 'your bad words' },
          relativeTo: activatedRoute,
        });
      }
    )
  ));

  it('should navigate with updated text on adding an end word ', async(
    inject(
      [ActivatedRoute, CreateRuleService, Router],
      (
        activatedRoute: ActivatedRoute,
        createRuleService: CreateRuleService,
        router: Router
      ) => {
        spyOn(router, 'navigate');
        component.inputText = 'bad words';
        const endWord = 'bad';
        component.onAddEndWord(endWord);
        expect(router.navigate).toHaveBeenCalledTimes(1);
        expect(router.navigate).toHaveBeenCalledWith(['/'], {
          queryParams: { text: 'bad words bad' },
          relativeTo: activatedRoute,
        });
      }
    )
  ));

  it('should navigate to next step with updated text ', async(
    inject(
      [ActivatedRoute, CreateRuleService, Router],
      (
        activatedRoute: ActivatedRoute,
        createRuleService: CreateRuleService,
        router: Router
      ) => {
        spyOn(router, 'navigate');
        activatedRoute.routeConfig.path = 'neighbouring-words';
        component.inputText = 'bad words';
        const startWord = 'your';
        const endWord = 'bad';
        component.onAddStartWord(startWord);
        component.onAddEndWord(endWord);
        component.onNextButton();
        expect(router.navigate).toHaveBeenCalledTimes(3);
        expect(router.navigate).toHaveBeenCalledWith(['../smart-rules'], {
          queryParams: { text: 'your bad words bad' },
          relativeTo: activatedRoute,
        });
      }
    )
  ));

  it('should allow navigate to next step without updating text ', async(
    inject(
      [ActivatedRoute, CreateRuleService, Router],
      (
        activatedRoute: ActivatedRoute,
        createRuleService: CreateRuleService,
        router: Router
      ) => {
        spyOn(router, 'navigate');
        activatedRoute.routeConfig.path = 'neighbouring-words';
        component.inputText = 'bad words';
        component.onNextButton();
        expect(router.navigate).toHaveBeenCalledTimes(1);
        expect(router.navigate).toHaveBeenCalledWith(['../smart-rules'], {
          queryParams: { text: 'bad words' },
          relativeTo: activatedRoute,
        });
      }
    )
  ));
});
