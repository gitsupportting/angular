import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LanguageTasksHomeHeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LanguageTasksHomeHeaderComponent', () => {
  let component: LanguageTasksHomeHeaderComponent;
  let fixture: ComponentFixture<LanguageTasksHomeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LanguageTasksHomeHeaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageTasksHomeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
