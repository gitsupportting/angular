import { Component, EventEmitter, Output, Input } from '@angular/core';

import { AuditQueueItem } from 'src/app/base-queue/interfaces/audit-queue-item.interface';
import { FixSpellingItem, Filters } from '../fix-spelling/fix-spelling';
import { AlternateTypes } from 'src/app/shared-components/alternatives/alternatives.component';
import { Example } from 'src/app/shared-components/example/example';
import { sortBy } from 'lodash';
import { Languages } from 'src/constants';
import { Observable } from 'rxjs';
import { QueueItemExtras } from 'src/app/shared-components/interfaces';
import { RulesApiService } from 'src/app/base-queue/rules-api.service';
import { TagInfo } from 'src/app/base-queue/interfaces/tag-info.interface';

interface IgnoreOption {
  label: string;
  value: string;
}

@Component({
  selector: 'ftq-fix-spelling-item',
  templateUrl: './fix-spelling-item.component.html',
})
export class FixSpellingItemComponent {
  @Input() disabled = false;
  @Input() item: AuditQueueItem<FixSpellingItem>;
  @Input() tagInfo: TagInfo;
  @Input() toggleReview: Observable<boolean>;

  @Output() itemChanged = new EventEmitter<AuditQueueItem<FixSpellingItem>>();
  @Output() tagsUpdated = new EventEmitter<string[]>();
  @Output() extrasUpdated = new EventEmitter<QueueItemExtras>();

  // Private Locals
  private _ignoreReasons: IgnoreOption[] = [
    { label: 'Ignore...', value: '' },
    { label: 'Wrong Language', value: 'WRONG.LANGUAGE' },
    { label: 'Spam', value: 'IGNORE.SPAM' },
    { label: 'Gibberish', value: 'IGNORE.GIBBERISH' },
  ];

  // Public locals for the template
  altTypes = AlternateTypes;
  autocomplete: string[] = [];
  correction: '';
  // decision: CreateQueueItemDecision;
  error: Error;
  examples: Example[] = [];
  filterObj: Filters = {} as Filters;
  languages = sortBy(Languages, 'name');
  searchText = '';
  selectedIgnore: IgnoreOption = this.ignoreReasons[0];

  // Constructors and initializers

  constructor(private readonly rulesApiService: RulesApiService) {}

  get labelGroups() {
    return this.tagInfo?.labelGroups;
  }

  onAlternativesChanged(extras: QueueItemExtras) {
    this.extrasUpdated.emit(extras);
  }

  get ignoreReasons() {
    return this._ignoreReasons.filter(
      (reason) => !this.item?.queueItem?.tags?.includes(reason.value)
    );
  }

  ignoreReasonLabel(value: string) {
    const label = this._ignoreReasons.find((reason) => reason.value === value)
      ?.label;
    if (!label) {
      for (const labelGroup of this.labelGroups) {
        const option = labelGroup.options.find(
          (option) => option.value === value
        );
        if (option) {
          return option.name;
        }
      }
    }
    return label || value;
  }

  get dataListID(): string {
    return `datalist-${this.item?.queueItem?.contentId}`;
  }

  onAlternativeAdded() {
    this.correction = '';
  }

  onIgnoreChanged() {
    // Validate
    if (!this.selectedIgnore) return;

    // Push onto the decision's tags if not already there
    if (!this.item.changes.tags.includes(this.selectedIgnore.value)) {
      this.tagsUpdated.emit(
        this.item.changes.tags.concat(this.selectedIgnore.value)
      );
    }

    // Reset the ignore picker on the next tick
    setTimeout(() => {
      this.selectedIgnore = this.ignoreReasons[0];
    });
  }

  // TODO: Using observables/subscriptions we should be able to cancel an
  // existing request when a new one comes in to avoid a race condition.

  // showing the search list accoring to the word. also hiding it while empty
  onSearchChange(prefix) {
    if (prefix && prefix.length >= 3) {
      this.rulesApiService
        .getAutoComplete(
          prefix,
          [this.item.queueItem.language.language],
          [this.item.queueItem.clientId],
          10
        )
        .subscribe(
          (data) => {
            if (data) this.autocomplete = [...data];
          },
          (error) => {
            console.warn(`Error getting autocomplete: ${error.message}`);
            this.autocomplete = [];
          }
        );
    }
  }

  onTagsUpdated(tags: any) {
    this.tagsUpdated.emit(tags);
  }

  removeTag(removeTag: string) {
    this.tagsUpdated.emit(
      this.item.changes.tags.filter((tag) => tag !== removeTag)
    );
  }

  selectedWord() {
    // Stub function until I figure out what this does. -SL
  }
}
