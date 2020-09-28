import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, ViewChild, Component } from '@angular/core';

import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxComponent, CheckboxComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create small checkbox', async() => {
    component.small = true;
    fixture.detectChanges();
    await fixture.whenStable();

    expect(component).toBeTruthy();
  });

  it('should change checkbox value', () => {
    component._value = false;
    component.toggleCheckbox();

    expect(component._value).toEqual(true);
  });

  it('should call write value function', () => {
   component.writeValue(true);
   fixture.detectChanges();

   expect(component._value).toEqual(true);
  });

  it('should call register on change function', fakeAsync(() => {
    component.registerOnChange(() => {});
    fixture.detectChanges();

    expect(component).toBeTruthy();
  }));

  it('should call register on touch function', fakeAsync(() => {
    component.registerOnTouched(() => {});
    fixture.detectChanges();

    expect(component).toBeTruthy();
  }));
});
