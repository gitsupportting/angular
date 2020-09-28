import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QueueLabelGroup } from '../../base-queue/interfaces/queue-label-group.interface';
import { IOptionButton } from '../option-button-group/option-button-group.component';
import { ITopic } from '../interfaces';
import {
  TagInfo,
  ContentTypeTagOptions,
} from 'src/app/base-queue/interfaces/tag-info.interface';

interface OptionButtonGroup {
  value: string | string[];
  multiple: boolean;
  ifTag: string;
  options: IOptionButton[];
}

@Component({
  selector: 'mod-queue-item-tags',
  templateUrl: './queue-item-tags.component.html',
  host: {
    class: 'block',
  },
})
export class QueueItemTagsComponent {
  @Output() tagsUpdated = new EventEmitter<string[]>();
  @Output() topicsUpdated = new EventEmitter<ITopic[]>();

  @Input() readOnly = false;
  @Input() tags: string[] = [];
  @Input() topics: ITopic[] = [];
  @Input() minimizeTopics = true;
  @Input()
  get initialTags() {
    return this._initialTags || [];
  }
  set initialTags(value: string[]) {
    this._initialTags = value;
    this.updateReadonlyTags();
  }
  @Input()
  get tagInfo() {
    return this._tagInfo;
  }
  set tagInfo(value: TagInfo) {
    this._tagInfo = value;
    const labelGroups = value?.labelGroups || [];
    const contentTypeTagOptions = value?.contentType || [];

    this.optionButtonGroups = this.getOptionButtonGroupsFromLabelGroups(
      labelGroups
    );

    let tagOptions = contentTypeTagOptions.slice();
    for (const labelGroup of labelGroups) {
      tagOptions = tagOptions.concat(labelGroup.options);
    }
    this._tagOptions = tagOptions;

    this.updateReadonlyTags();

    // Required to resolve a change detection issue.
    // If the value of tags is different at the beginning of the change
    // detection cycle than it is at the end then Angular gets upset.
    window.setTimeout(() => this.updateTags(), 0);
  }

  optionButtonGroups: OptionButtonGroup[];
  readOnlyTags: { name: string; description?: string }[];

  private _tagOptions: ContentTypeTagOptions[] = [];
  private _tagInfo: TagInfo;
  private _initialTags: string[] = [];

  onTopicsUpdated(topics: ITopic[]) {
    this.topicsUpdated.emit(topics);
  }

  onSelectedOptionsChanged(
    optionButtonGroup: OptionButtonGroup,
    selectedOption: string | string[]
  ) {
    if (this.readOnly) return;
    optionButtonGroup.value = selectedOption;

    if (selectedOption === 'WRONG') {
      for (const group of this.optionButtonGroups) {
        if (
          group.ifTag === 'WRONG' &&
          (!group.value || (group.multiple && !group.value.length)) &&
          group.options.some((option) => option.value === 'WRONG.FIX_TOPICS')
        ) {
          group.value = group.multiple
            ? ['WRONG.FIX_TOPICS']
            : 'WRONG.FIX_TOPICS';
        }
      }
    }

    this.updateTags();
  }

  private updateReadonlyTags() {
    if (!this.initialTags?.length) {
      this.readOnlyTags = [
        {
          name: 'No tags',
        },
      ];
    } else {
      this.readOnlyTags = this.initialTags.map((value) => {
        const tagOption = this._tagOptions.find((tag) => tag.value === value);

        if (tagOption) {
          return tagOption;
        }

        return {
          name: value.replace(/_+/g, ' '),
        };
      });
    }
  }

  private updateTags() {
    let updatedTags: string[] = [];
    for (const optionButtonGroup of this.optionButtonGroups) {
      if (
        !optionButtonGroup.ifTag ||
        updatedTags.indexOf(optionButtonGroup.ifTag) !== -1
      ) {
        updatedTags = updatedTags.concat(optionButtonGroup.value);
      }
    }

    this.tagsUpdated.emit(updatedTags);
  }

  private getOptionButtonGroupsFromLabelGroups(
    labelGroups: QueueLabelGroup[]
  ): OptionButtonGroup[] {
    return labelGroups.map<OptionButtonGroup>((labelGroup) => {
      let value: string | string[];

      if (labelGroup.multiple) {
        value = this.tags.filter((tag) =>
          labelGroup.options.find((option) => option.value === tag)
        );

        if (!value?.length && Array.isArray(labelGroup.defaultValue)) {
          value = labelGroup.defaultValue;
        }
      } else {
        for (const tag of this.tags) {
          if (labelGroup.options.find((option) => option.value === tag)) {
            value = tag;
            break;
          }
        }

        if (!value) {
          value = labelGroup.defaultValue || '';
        }
      }

      return {
        value,
        multiple: labelGroup.multiple,
        ifTag: labelGroup.ifTag || '',
        options: labelGroup.options.map((option) => {
          let icon = '';
          if (
            labelGroups.some((item) => item.ifTag === option.value) ||
            option.value === 'WRONG.FIX_TOPICS'
          ) {
            icon = 'chevron-down';
          }
          return {
            icon,
            value: option.value,
            label: option.name,
            ariaLabel: option.name,
          };
        }),
      };
    });
  }
}
