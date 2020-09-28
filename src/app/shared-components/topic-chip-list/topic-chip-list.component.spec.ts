import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TopicChipListComponent } from './topic-chip-list.component';

describe('TopicChipListComponent', () => {
  let component: TopicChipListComponent;
  let fixture: ComponentFixture<TopicChipListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopicChipListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicChipListComponent);
    component = fixture.componentInstance;
    component.topics = [];
    component.policyGuides = [
      {
        name: 'Global Chat',
        rules: [
          { topic: 0, riskThreshold: 6 },
          { topic: 5, riskThreshold: 5 },
        ],
      },
      { name: 'Private Chat', rules: [{ topic: 5, riskThreshold: 6 }] },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#handlePolicies', () => {
    it("handlePolicies function will skip the topics which not existing in policyGuide's topics", () => {
      component.topics = [
        { id: 0, risk: 5 },
        { id: 4, risk: 2 },
        { id: 6, risk: 5 },
      ];

      const policyModels = component.handlePolicies(
        component.topics,
        component.policyGuides
      );
      expect(policyModels[0].isSafe).toBe(true);
      expect(policyModels[1].isSafe).toBe(true);
    });

    it('Topic is unsafe if risk greater than or equal to riskThreshold', () => {
      component.topics = [
        { id: 0, risk: 6 },
        { id: 5, risk: 6 },
      ];

      const policyModelsHaveGreaterRT = component.handlePolicies(
        component.topics,
        component.policyGuides
      );
      expect(policyModelsHaveGreaterRT[0].isSafe).toBe(false);
      expect(policyModelsHaveGreaterRT[1].isSafe).toBe(false);

      component.topics = [
        { id: 0, risk: 5 },
        { id: 5, risk: 6 },
      ];
      const policyModelsHaveEqualRT = component.handlePolicies(
        component.topics,
        component.policyGuides
      );
      expect(policyModelsHaveEqualRT[0].isSafe).toBe(false);
      expect(policyModelsHaveEqualRT[1].isSafe).toBe(false);
    });

    it('Topic is safe if risk less than riskThreshold', () => {
      component.topics = [
        { id: 0, risk: 3 },
        { id: 4, risk: 2 },
        { id: 5, risk: 3 },
      ];

      const policyModels = component.handlePolicies(
        component.topics,
        component.policyGuides
      );
      expect(policyModels[0].isSafe).toBe(true);
      expect(policyModels[1].isSafe).toBe(true);
    });
  });
});
