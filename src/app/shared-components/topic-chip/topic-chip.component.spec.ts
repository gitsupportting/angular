import { TopicChipComponent } from './topic-chip.component';
import { Topics } from 'src/constants';
import { ITopic } from '../interfaces';

jest.mock('src/constants', () => ({
  Topics: {
    0: { name: 'Topic 0', icon: 'topic-icon-0' },
    1: { name: 'Topic 1', icon: 'topic-icon-1' },
    2: { name: 'Topic 2', icon: 'topic-icon-2' },
    3: { name: 'Topic 3', icon: 'topic-icon-3' },
    4: { name: 'Topic 4', icon: 'topic-icon-4' },
    5: { name: 'Topic 5', icon: 'topic-icon-5' },
    6: { name: 'Topic 6', icon: 'topic-icon-6' },
    7: { name: 'Topic 7', icon: 'topic-icon-7' },
    8: { name: 'Topic 8', icon: 'topic-icon-8' },
    9: { name: 'Topic 9', icon: 'topic-icon-9' },
  },
}));

describe('TopicChipComponent', () => {
  let topicChipComponent: TopicChipComponent;

  beforeEach(() => {
    topicChipComponent = new TopicChipComponent();
  });

  describe('initial state', () => {
    it('should default readOnly to false', () => {
      expect(topicChipComponent.readOnly).toBe(false);
    });

    it('should default minimized to false', () => {
      expect(topicChipComponent.minimized).toBe(false);
    });

    it('should default type to "default"', () => {
      expect(topicChipComponent.type).toBe('default');
    });

    it('should default topicName to empty string', () => {
      expect(topicChipComponent.topicName).toBe('');
    });

    it('should default topicIcon to empty string', () => {
      expect(topicChipComponent.topicIcon).toBe('');
    });

    it('should default editing to false', () => {
      expect(topicChipComponent.editing).toBe(false);
    });

    it('should default risks to [0, 1, 2, 3, 4, 5, 6, 7]', () => {
      expect(topicChipComponent.risks).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
    });

    it('should default minRisk to 0', () => {
      expect(topicChipComponent.minRisk).toBe(0);
    });

    it('should default maxRisk to 7', () => {
      expect(topicChipComponent.maxRisk).toBe(7);
    });

    it('should default topic to undefined', () => {
      expect(topicChipComponent.topic).toBeUndefined();
    });
  });

  describe('#ngOnInit', () => {
    it('should set editing to true if the component not readOnly and topic risk is 4', () => {
      topicChipComponent.editing = false;
      topicChipComponent.readOnly = false;
      topicChipComponent.topic = { id: 0, risk: 4 };

      topicChipComponent.ngOnInit();
      expect(topicChipComponent.editing).toBe(true);

      // Should still be true
      topicChipComponent.ngOnInit();
      expect(topicChipComponent.editing).toBe(true);
    });

    it('should set editing to false if the component is readOnly or topic risk is not 4', () => {
      topicChipComponent.editing = true;
      topicChipComponent.readOnly = true;
      topicChipComponent.topic = { id: 0, risk: 4 };

      topicChipComponent.ngOnInit();
      expect(topicChipComponent.editing).toBe(false);

      topicChipComponent.editing = true;
      topicChipComponent.readOnly = false;
      topicChipComponent.topic = { id: 0, risk: 3 };

      topicChipComponent.ngOnInit();
      expect(topicChipComponent.editing).toBe(false);

      topicChipComponent.editing = true;
      topicChipComponent.readOnly = true;
      topicChipComponent.topic = { id: 0, risk: 6 };

      topicChipComponent.ngOnInit();
      expect(topicChipComponent.editing).toBe(false);

      topicChipComponent.editing = false;
      topicChipComponent.readOnly = true;
      topicChipComponent.topic = { id: 0, risk: 6 };

      topicChipComponent.ngOnInit();
      expect(topicChipComponent.editing).toBe(false);
    });
  });

  describe('#set topic', () => {
    it.each([
      [{ id: 0, risk: 0 }],
      [{ id: 1, risk: 3 }],
      [{ id: 2, risk: 1 }],
      [{ id: 3, risk: 4 }],
      [{ id: 4, risk: 2 }],
      [{ id: 5, risk: 9 }],
    ])('should update the topic', (topic) => {
      topicChipComponent.topic = topic;
      expect(topicChipComponent.topic).toEqual(topic);
    });

    it.each([
      [{ id: 0, risk: 0 }],
      [{ id: 1, risk: 3 }],
      [{ id: 2, risk: 1 }],
      [{ id: 3, risk: 4 }],
      [{ id: 4, risk: 2 }],
      [{ id: 5, risk: 9 }],
    ])('should set topicName from the Topics constant', (topic) => {
      topicChipComponent.topic = topic;
      expect(topicChipComponent.topicName).toEqual(Topics[topic.id].name);
    });

    it.each([
      [{ id: 0, risk: 0 }],
      [{ id: 1, risk: 3 }],
      [{ id: 2, risk: 1 }],
      [{ id: 3, risk: 4 }],
      [{ id: 4, risk: 2 }],
      [{ id: 5, risk: 9 }],
    ])('should set topicIcon from the Topics constant', (topic) => {
      topicChipComponent.topic = topic;
      expect(topicChipComponent.topicIcon).toEqual(Topics[topic.id].icon);
    });

    it.each([
      [{ id: -1, risk: 3 }],
      [{ id: 12, risk: 0 }],
      [{ id: 104, risk: 7 }],
      [{ id: NaN, risk: 4 }],
      [{ id: Infinity, risk: 1 }],
    ])(
      'should throw an error if the topic id is not defined in constants',
      (topic) => {
        expect.assertions(1);
        try {
          topicChipComponent.topic = topic;
        } catch (error) {
          expect(error).toBeTruthy();
        }
      }
    );
  });

  describe('#set minRisk', () => {
    it.each([
      [0, 0],
      [1, 1],
      [-14, 0],
      [104, 104],
      [-Infinity, 0],
      [Infinity, Infinity],
    ])(
      'should update minRisk to the greater of the value or 0',
      (minRisk, expectedMinRisk) => {
        topicChipComponent.minRisk = minRisk;
        expect(topicChipComponent.minRisk).toEqual(expectedMinRisk);
      }
    );

    it.each([
      [0, [0, 1, 2, 3, 4, 5, 6, 7]],
      [1, [1, 2, 3, 4, 5, 6, 7]],
      [3, [3, 4, 5, 6, 7]],
      [4, [4, 5, 6, 7]],
      [10, []],
    ])('should update risks', (minRisk, expectedRisks) => {
      topicChipComponent.risks = [];
      topicChipComponent.minRisk = minRisk;
      expect(topicChipComponent.risks).toEqual(expectedRisks);
    });
  });

  describe('#set maxRisk', () => {
    it.each([
      [7, 7],
      [1, 1],
      [30, 30],
      [104, 104],
    ])('should update maxRisk', (maxRisk, expectedMaxRisk) => {
      topicChipComponent.maxRisk = maxRisk;
      expect(topicChipComponent.maxRisk).toEqual(expectedMaxRisk);
    });

    it.each([
      [0, 7, 7],
      [2, 1, 2],
      [0, -4, 0],
    ])(
      'should set maxRisk to be at least minRisk',
      (minRisk, maxRisk, expectedMaxRisk) => {
        topicChipComponent.minRisk = minRisk;
        topicChipComponent.maxRisk = maxRisk;
        expect(topicChipComponent.maxRisk).toEqual(expectedMaxRisk);
      }
    );

    it.each([
      [7, [0, 1, 2, 3, 4, 5, 6, 7]],
      [5, [0, 1, 2, 3, 4, 5]],
      [4, [0, 1, 2, 3, 4]],
      [3, [0, 1, 2, 3]],
      [0, [0]],
    ])('should update risks', (maxRisk, expectedRisks) => {
      topicChipComponent.risks = [];
      topicChipComponent.maxRisk = maxRisk;
      expect(topicChipComponent.risks).toEqual(expectedRisks);
    });
  });

  describe('#removeTopic', () => {
    it('should emit the removed event with the topic to remove', () => {
      const topic = { id: 3, risk: 4 };
      const onRemoved = jest.fn();
      topicChipComponent.topic = topic;
      topicChipComponent.removed.subscribe(onRemoved);

      topicChipComponent.removeTopic();
      expect(onRemoved).toHaveBeenCalledTimes(1);
      expect(onRemoved).toHaveBeenCalledWith(topic);
    });
  });

  describe('#setTopicRisk', () => {
    it.each([
      [{ id: 0, risk: 4 }, 2],
      [{ id: 0, risk: 4 }, 4],
      [{ id: 1, risk: 3 }, 0],
      [{ id: 2, risk: 1 }, 5],
      [{ id: 3, risk: 5 }, 3],
    ])(
      'should emit the riskChanged event with the updated topic data',
      (initalTopic, risk) => {
        const onRiskChanged = jest.fn();
        topicChipComponent.riskChanged.subscribe(onRiskChanged);
        topicChipComponent.topic = initalTopic;

        topicChipComponent.setTopicRisk(risk);

        expect(onRiskChanged).toHaveBeenCalledTimes(1);
        expect(onRiskChanged).toHaveBeenCalledWith(
          expect.objectContaining({
            id: initalTopic.id,
            risk,
          })
        );
      }
    );

    it('should set editing to false', () => {
      topicChipComponent.topic = { id: 0, risk: 4 };
      topicChipComponent.editing = true;

      topicChipComponent.setTopicRisk(2);
      expect(topicChipComponent.editing).toBe(false);

      topicChipComponent.setTopicRisk(7);
      expect(topicChipComponent.editing).toBe(false);
    });
  });

  describe('#toggleEdit', () => {
    it('should set edititing to true to false or false to true', () => {
      topicChipComponent.editing = false;
      topicChipComponent.toggleEdit();
      expect(topicChipComponent.editing).toBe(true);

      topicChipComponent.toggleEdit();
      expect(topicChipComponent.editing).toBe(false);
    });
  });
});
