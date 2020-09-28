import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LanguageTasksDetailsHeaderComponent } from './header.component';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Breadcrumb } from 'src/app/shared-components/breadcrumbs/breadcrumb.interface';
import { Breadcrumbs } from '@sentry/browser/dist/integrations';

describe('LanguageTasksDetailsHeaderComponent', () => {
  let component: LanguageTasksDetailsHeaderComponent;
  let fixture: ComponentFixture<LanguageTasksDetailsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [LanguageTasksDetailsHeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageTasksDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create with pageType 0 for details', async () => {
    let breadcrumbs: Breadcrumb[] = [
      {
        label: 'Filter Quality',
        url: '/filter-quality',
      },
      {
        label: 'Language Tasks',
        url: '/filter-quality/language-tasks',
      },
    ];
    component.breadcrumbs = breadcrumbs;
    component.pageType = 0;
    component.ngOnInit();

    await fixture.whenStable();
    fixture.detectChanges();
    expect(component).toBeTruthy();
    breadcrumbs.push({
      label: 'Details',
    });
    expect(component.breadcrumbs).toEqual(breadcrumbs);
  });

  it('should create with pageType 1 for edit', async () => {
    let breadcrumbs: Breadcrumb[] = [
      {
        label: 'Filter Quality',
        url: '/filter-quality',
      },
      {
        label: 'Language Tasks',
        url: '/filter-quality/language-tasks',
      },
    ];
    component.breadcrumbs = breadcrumbs;
    component.pageType = 1;
    component.ngOnInit();

    await fixture.whenStable();
    fixture.detectChanges();
    breadcrumbs.push({
      label: 'Edit',
    });
    expect(component).toBeTruthy();
  });

  it('should call edit task function', () => {
    component.editTask();
    fixture.detectChanges();

    expect(component.pageType).toEqual(1);
  });

  it('should call create task function', () => {
    component.createTask();
    fixture.detectChanges();

    expect(component.pageType).toEqual(2);
  });
});
