import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PolicyGuideComponent } from './policy-guide.component';
import { SAFE_POLICY, UN_SAFE_POLICY } from './policy-guide.component';

const policyOne = {
  isSafe: true,
  policyGuide: {
    name: 'Global Chat',
    rules: [
      { topic: 0, riskThreshold: 6 },
      { topic: 5, riskThreshold: 5 },
    ],
  },
};

const policyTwo = {
  isSafe: false,
  policyGuide: {
    name: 'Global Chat',
    rules: [
      { topic: 0, riskThreshold: 6 },
      { topic: 5, riskThreshold: 5 },
    ],
  },
};

describe('PolicyGuideComponent', () => {
  let component: PolicyGuideComponent;
  let fixture: ComponentFixture<PolicyGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyGuideComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyGuideComponent);
    component = fixture.componentInstance;
    component.policy = policyOne;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('Value of icon, risk will update when execute ngOnInit(), case: isSafe equal true', () => {
      component.policy = policyOne;
      component.ngOnInit();
      expect(component.risk).toBe(SAFE_POLICY.risk);
      expect(component.icon).toBe(SAFE_POLICY.icon);
      expect(component.name).toBe('Global Chat');
    });

    it('Value of icon, risk will update when execute ngOnInit(), case: isSafe equal false', () => {
      component.policy = policyTwo;
      component.ngOnInit();
      expect(component.risk).toBe(UN_SAFE_POLICY.risk);
      expect(component.icon).toBe(UN_SAFE_POLICY.icon);
      expect(component.name).toBe('Global Chat');
    });
  });
});
