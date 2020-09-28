import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';

import { CreateRuleDashboardComponent } from './create-rule-dashboard.component';
import { CommonModule } from '@angular/common';
import { CreateRuleRoutingModule } from '../create-rule-routing.module';
import { SharedComponentsModule } from '../../../../shared-components/shared-components.module';
import { FixSpellingComponent } from '../fix-spelling/fix-spelling.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { EnterTextComponent } from '../enter-text/enter-text.component';
import { CreateRuleService } from '../create-rule.service';
import { NeighbouringWordsComponent } from '../neighbouring-words/neighbouring-words.component';

describe('CreateRuleDashboardComponent', () => {
  let component: CreateRuleDashboardComponent;
  let fixture: ComponentFixture<CreateRuleDashboardComponent>;

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
      ],
      providers: [
        CreateRuleService,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({
              text: 'Test;',
            }),
            routeConfig: { path: '/' },
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRuleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.inputText).toBe('Test;');
    expect(component.step).toBe(0);
  });

  it('should switch alive flag after destroy', () => {
    expect(component.isAlive).toBe(true);
    component.ngOnDestroy();
    expect(component.isAlive).toBe(false);
  });

  it('should navigate to first step', async(
    inject(
      [ActivatedRoute, Router],
      (route: ActivatedRoute, router: Router) => {
        spyOn(router, 'navigate');
        component.onEdit();
        expect(router.navigate).toBeCalledWith(['./'], {
          queryParams: { text: 'Test;' },
          relativeTo: route,
        });
      }
    )
  ));

  it('should navigate to selected step', async(
    inject(
      [ActivatedRoute, Router],
      (route: ActivatedRoute, router: Router) => {
        spyOn(router, 'navigate');
        component.onNavigate(0);
        expect(router.navigate).toBeCalledWith(['./fix-spelling'], {
          queryParams: { text: 'Test;' },
          relativeTo: route,
        });
      }
    )
  ));

  it('should find number of the step', () => {
    const step = component.findStep('smart-rules');
    expect(step).toBe(3);
  });

  it('should parse url', async(() => {
    component.parseUrl('/fix-spelling');
    expect(component.step).toBe(1);
  }));
});
