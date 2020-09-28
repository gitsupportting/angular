import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PolicyGuideComponent } from './policy-guide.component';
import { Policy } from '../../../constants';

const SAFE_POLICY = {
  icon: 'thumb-up',
  risk: 0,
};

const UN_SAFE_POLICY = {
  icon: 'thumb-down',
  risk: 6,
};

// safe
const policy: Policy = {
  isSafe: true,
  policyGuide: {
    name: 'Global Chat',
    rules: [
      { topic: 0, riskThreshold: 6 },
      { topic: 5, riskThreshold: 5 },
    ],
  },
};

// unsafe
const policy2: Policy = {
  isSafe: false,
  policyGuide: {
    name: 'Private Chat',
    rules: [{ topic: 5, riskThreshold: 6 }],
  },
};

describe('PolicyGuideComponent', () => {
  let component: PolicyGuideComponent;
  let fixture: ComponentFixture<PolicyGuideComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyGuideComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyGuideComponent);
    component = fixture.componentInstance;
    component.policy = policy;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly risk, icon, name the passed @Input value', () => {
    fixture.detectChanges();
    component.ngOnInit();
    // safe
    expect(component.risk).toBe(SAFE_POLICY['risk']);
    expect(component.icon).toBe(SAFE_POLICY['icon']);
    expect(component.name).toBe('Global Chat');

    // unsafe
    component.policy = policy2;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.risk).toBe(UN_SAFE_POLICY['risk']);
    expect(component.icon).toBe(UN_SAFE_POLICY['icon']);
    expect(component.name).toBe('Private Chat');
  });
});
