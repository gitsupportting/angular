import { QueueItemTagsComponent } from './queue-item-tags.component';
import { QueueLabelGroup } from 'src/app/base-queue/interfaces/queue-label-group.interface';
import { TagInfo } from 'src/app/base-queue/interfaces/tag-info.interface';

const labelGroups: QueueLabelGroup[] = [
  {
    multiple: true,
    options: [
      {
        name: 'Correct',
        value: 'CORRECT',
      },
      {
        name: 'Wrong',
        value: 'WRONG',
      },
    ],
    defaultValue: ['DefaultValue'],
  },
  {
    ifTag: 'WRONG',
    multiple: false,
    options: [
      {
        name: 'Bad',
        value: 'WRONG.BAD',
      },
      {
        name: 'Silly',
        value: 'WRONG.SILLY',
      },
    ],
    defaultValue: ['DefaultValue'],
  },
];

const tagInfo: TagInfo = {
  contentType: [],
  labelGroups,
};

describe('QueueItemTagsComponent', () => {
  describe('#set tagInfo', () => {
    it('should set the optionButtonGroups on the component', () => {
      const tagsComponent = new QueueItemTagsComponent();
      expect(tagsComponent.optionButtonGroups).toBeFalsy();

      tagsComponent.tags = [];
      tagsComponent.tagInfo = tagInfo;

      const expected = [
        {
          value: ['DefaultValue'],
          multiple: true,
          ifTag: '',
          options: [
            {
              value: 'CORRECT',
              label: 'Correct',
              ariaLabel: 'Correct',
              icon: '',
            },
            {
              value: 'WRONG',
              label: 'Wrong',
              ariaLabel: 'Wrong',
              icon: 'chevron-down',
            },
          ],
        },
        {
          value: ['DefaultValue'],
          multiple: false,
          ifTag: 'WRONG',
          options: [
            {
              value: 'WRONG.BAD',
              label: 'Bad',
              ariaLabel: 'Bad',
              icon: '',
            },
            {
              value: 'WRONG.SILLY',
              label: 'Silly',
              ariaLabel: 'Silly',
              icon: '',
            },
          ],
        },
      ];

      expect(tagsComponent.optionButtonGroups).toEqual(expected);
    });

    it('should set values based on the tags', () => {
      const tagsComponent = new QueueItemTagsComponent();
      tagsComponent.tags = ['CORRECT'];
      tagsComponent.tagInfo = tagInfo;
      expect(tagsComponent.optionButtonGroups[0].value).toEqual(['CORRECT']);
      expect(tagsComponent.optionButtonGroups[1].value).toEqual([
        'DefaultValue',
      ]);

      tagsComponent.tags = ['CORRECT', 'WRONG'];
      tagsComponent.tagInfo = tagInfo;
      expect(tagsComponent.optionButtonGroups[0].value).toEqual([
        'CORRECT',
        'WRONG',
      ]);
      expect(tagsComponent.optionButtonGroups[1].value).toEqual([
        'DefaultValue',
      ]);

      tagsComponent.tags = ['CORRECT', 'WRONG.BAD'];
      tagsComponent.tagInfo = tagInfo;
      expect(tagsComponent.optionButtonGroups[0].value).toEqual(['CORRECT']);
      expect(tagsComponent.optionButtonGroups[1].value).toEqual('WRONG.BAD');

      tagsComponent.tags = ['WRONG', 'WRONG.BAD'];
      tagsComponent.tagInfo = tagInfo;
      expect(tagsComponent.optionButtonGroups[0].value).toEqual(['WRONG']);
      expect(tagsComponent.optionButtonGroups[1].value).toEqual('WRONG.BAD');
    });

    it('should set default values', () => {
      const tagsComponent = new QueueItemTagsComponent();
      tagsComponent.tags = [];
      tagsComponent.tagInfo = tagInfo;

      expect(tagsComponent.optionButtonGroups[1].value).toEqual([
        'DefaultValue',
      ]);
    });
  });

  describe('#onSelectedOptionsChanged', () => {
    // Tags gets passed by reference into the component
    const state: { tags: string[] } = { tags: [] };
    let onTagsUpdated: jest.Mock<void, [string[]]>;
    let tagsComponent: QueueItemTagsComponent;

    beforeAll(() => {
      onTagsUpdated = jest.fn((updatedTags) => {
        state.tags = updatedTags;
      });
    });

    beforeEach(() => {
      state.tags = [];
      onTagsUpdated.mockClear();
      tagsComponent = new QueueItemTagsComponent();
      tagsComponent.tags = state.tags;
      tagsComponent.tagInfo = tagInfo;
      tagsComponent.tagsUpdated.subscribe(onTagsUpdated);
    });

    it('should not emit anything if readOnly is true', () => {
      tagsComponent.readOnly = true;
      tagsComponent.onSelectedOptionsChanged(
        tagsComponent.optionButtonGroups[0],
        ['CORRECT']
      );

      expect(onTagsUpdated).not.toHaveBeenCalled();
      expect(state.tags).toEqual([]);
    });

    it('should emit #tagsUpdated with the updated tags', () => {
      tagsComponent.onSelectedOptionsChanged(
        tagsComponent.optionButtonGroups[0],
        ['CORRECT']
      );

      expect(onTagsUpdated).toHaveBeenCalledTimes(1);
      expect(onTagsUpdated).toHaveBeenCalledWith(['CORRECT']);
      expect(state.tags).toEqual(['CORRECT']);
    });

    it('should not include conditional tags when the parent is not selected', () => {
      tagsComponent.onSelectedOptionsChanged(
        tagsComponent.optionButtonGroups[0],
        ['CORRECT']
      );

      expect(onTagsUpdated).toHaveBeenLastCalledWith(['CORRECT']);
      expect(state.tags).toEqual(['CORRECT']);

      tagsComponent.onSelectedOptionsChanged(
        tagsComponent.optionButtonGroups[1],
        ['WRONG.BAD']
      );

      expect(onTagsUpdated).toHaveBeenLastCalledWith(['CORRECT']);
      expect(state.tags).toEqual(['CORRECT']);

      tagsComponent.onSelectedOptionsChanged(
        tagsComponent.optionButtonGroups[0],
        ['WRONG']
      );

      expect(onTagsUpdated).toHaveBeenLastCalledWith(['WRONG', 'WRONG.BAD']);
      expect(state.tags).toEqual(['WRONG', 'WRONG.BAD']);

      tagsComponent.onSelectedOptionsChanged(
        tagsComponent.optionButtonGroups[0],
        ['CORRECT']
      );

      expect(onTagsUpdated).toHaveBeenLastCalledWith(['CORRECT']);
      expect(state.tags).toEqual(['CORRECT']);
    });
  });
});
