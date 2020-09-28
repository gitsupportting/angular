import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';

import { EnterTextComponent } from './enter-text.component';
import { FixSpellingComponent } from '../fix-spelling/fix-spelling.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { CreateRuleRoutingModule } from '../create-rule-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from '../../../../shared-components/shared-components.module';
import { CreateRuleDashboardComponent } from '../create-rule-dashboard/create-rule-dashboard.component';
import { CreateRuleService } from '../create-rule.service';
import { NeighbouringWordsComponent } from '../neighbouring-words/neighbouring-words.component';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

describe('EnterTextComponent', () => {
  let component: EnterTextComponent;
  let fixture: ComponentFixture<EnterTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EnterTextComponent,
        FixSpellingComponent,
        EnterTextComponent,
        CreateRuleDashboardComponent,
        NeighbouringWordsComponent,
      ],
      imports: [
        RouterTestingModule,
        CommonModule,
        CreateRuleRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedComponentsModule,
      ],
      providers: [
        CreateRuleService,
        {
          provide: ActivatedRoute,
          useValue: {
            routeConfig: { path: 'empty-rule' },
            queryParams: of({
              text: 'Test;',
              step: 1,
            }),
            snapshot: {},
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it.skip('should navigate to next step', async(
    inject(
      [ActivatedRoute, CreateRuleService, Router],
      (
        activatedRoute: ActivatedRoute,
        createRuleService: CreateRuleService,
        router: Router
      ) => {
        spyOn(router, 'navigate');
        component.text = 'test_text';
        component.nextStep();
        expect(router.navigate).toHaveBeenCalledWith(['../fix-spelling'], {
          queryParams: { text: 'test_text' },
          relativeTo: activatedRoute,
        });
      }
    )
  ));

  it('should return true for empty text', () => {
    component.text = '';
    expect(component.isTextEmpty()).toBe(true);
  });

  it('should return true for only white spaces in text', () => {
    component.text = '    ';
    expect(component.isTextEmpty()).toBe(true);
  });

  it('should return false for a valid text', () => {
    component.text = 'bad words';
    expect(component.isTextEmpty()).toBe(false);
  });
});
