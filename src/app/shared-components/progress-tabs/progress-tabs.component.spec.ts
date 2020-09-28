import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressTabsComponent } from './progress-tabs.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

describe('ProgressTabsComponent', () => {
  let component: ProgressTabsComponent;
  let fixture: ComponentFixture<ProgressTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressTabsComponent],
      imports: [CommonModule, FormsModule, RouterModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it.each([
    [1, 1],
    [5, 5],
    [14, 14],
    [347, 347],
  ])('updates step when activeStep is set to %i', (activeStep, expected) => {
    expect(component.step).toBeFalsy();
    component.activeStep = activeStep;
    expect(component.step).toEqual(expected);
  });

  it.each([
    [null, 0],
    [undefined, 0],
    [-1, 0],
    ['-1', 0],
    [5, 5],
    ['2', 2],
  ])(
    'should check set step to %i if step is missed or incorrect/correct',
    (activeStep, expected) => {
      component.activeStep = activeStep;
      expect(component.step).toBe(expected);
    }
  );

  it.each([
    [0, false, 1],
    [-1, false, 2],
    [null, false, 3],
    [undefined, false, 4],
    [2, true, 1],
    [1, true, 0],
  ])(
    'should call navigate to %i step',
    (activeStep, sequential, navigateStep) => {
      spyOn(component.navigate, 'next');
      component.activeStep = activeStep;
      component.sequential = sequential;
      component.onNavigate(navigateStep);
      expect(component.navigate.next).toBeCalledWith(navigateStep);
    }
  );

  it.each([
    [1, true, 1],
    [4, true, 5],
    [-1, true, 0],
    [0, true, 0],
    [-1, true, 0],
    [null, true, 0],
    [undefined, true, 0],
  ])(
    'should not call navigate to %i step',
    (activeStep, sequential, navigateStep) => {
      spyOn(component.navigate, 'next');
      component.activeStep = activeStep;
      component.sequential = sequential;
      component.onNavigate(navigateStep);
      expect(component.navigate.next).toHaveBeenCalledTimes(0);
    }
  );
});
