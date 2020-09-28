import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppGridComponent } from './app-grid.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const app = {
  text: 'test_app',
  icon: 'test_icon',
  url: 'test_url',
};

describe('AppGridComponent', () => {
  let component: AppGridComponent;
  let fixture: ComponentFixture<AppGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppGridComponent],
      imports: [CommonModule, FormsModule, RouterModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set app', () => {
    expect(component._apps.length).toBe(0);
    component.apps = [app];
    expect(component.apps.length).toBe(1);
    expect(component.apps[0]).toBe(app);
  });

  it('should set columns', () => {
    expect(component._gridColumns).toBe(4);
    component.columns = 2;
    expect(component.columns).toBe(2);
  });
});
