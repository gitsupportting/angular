import { Component, Input, OnInit } from '@angular/core';
import { BaseQueueService } from 'src/app/base-queue/base-queue.service';
import { IOptionButton } from '../option-button-group/option-button-group.component';
import { Breadcrumb } from '../breadcrumbs/breadcrumb.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mod-queue-wrapper',
  templateUrl: './queue-wrapper.component.html',
  styleUrls: ['./queue-wrapper.component.less'],
})
export class QueueWrapperComponent implements OnInit {
  @Input() heading: string;
  @Input() breadcrumbs: Breadcrumb[] = [];
  @Input() sidebarOptions: object;

  currentPage = 3;
  showSidebar = false;

  readonly topicChipLayoutOptions: IOptionButton[] = [
    {
      ariaLabel: 'Expanded topic chips',
      value: 'expanded',
      icon: 'view-list',
    },
    {
      ariaLabel: 'Minimized topic chips',
      value: 'minimized',
      icon: 'view-comfy',
    },
  ];

  readonly resultsPerPageOptions: IOptionButton[] = [
    { value: 1, ariaLabel: '1', label: '1' },
    { value: 2, ariaLabel: '2', label: '2' },
    { value: 3, ariaLabel: '3', label: '3' },
    { value: 5, ariaLabel: '5', label: '5' },
    { value: 10, ariaLabel: '10', label: '10' },
    { value: 15, ariaLabel: '15', label: '15' },
    { value: 25, ariaLabel: '25', label: '25' },
    { value: 50, ariaLabel: '50', label: '50' },
  ];

  constructor(
    public readonly queueService: BaseQueueService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  get topicChipLayout() {
    return this.queueService.minimizeTopics ? 'minimized' : 'expanded';
  }
  set topicChipLayout(layout: 'minimized' | 'expanded') {
    this.queueService.minimizeTopics = layout === 'minimized';
  }

  get isLoading() {
    return this.queueService.isLoading;
  }

  get isReviewing() {
    return this.queueService.isReviewing;
  }

  get queueFilters() {
    return this.queueService.queueFilters;
  }

  get hasPreviousPage() {
    return this.queueService.hasPreviousPage;
  }

  get queueSize() {
    return this.queueService.queueSize;
  }

  get currentPageSize() {
    return this.queueService.currentPageSize;
  }

  get resultsPerPage() {
    return this.queueService.resultsPerPage;
  }

  set resultsPerPage(value: number | string) {
    const parsed = typeof value === 'number' ? value : parseInt(value, 10);
    const changed = parsed !== this.resultsPerPage;
    this.queueService.resultsPerPage = parsed;

    if (changed && !this.isReviewing) {
      if (this.currentPage === 1) {
        this.queueService.loadItems(1);
      } else {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { page: 1 },
        });
      }
    }
  }

  get amountCompleted() {
    return this.queueService.amountCompleted;
  }

  get showDoneMessage() {
    return (
      (!this.isReviewing || this.currentPageSize === 0) &&
      !this.isLoading &&
      this.queueSize === 0
    );
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((paramMap) => {
      if (paramMap.has('page')) {
        this.currentPage = parseInt(paramMap.get('page'), 10);
      } else {
        this.currentPage = 1;
      }

      this.queueService.loadItems(this.currentPage);
    });
  }

  onPageChanged(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page },
    });
  }

  onFilterButtonPressed() {
    this.showSidebar = true;
  }

  onFilterChanged() {
    this.queueService.onFilterChanged();
  }

  onReviewButtonPressed() {
    this.queueService.toggleReviewMode();
  }

  onNextButtonPressed() {
    this.queueService.nextPage();
  }

  onPreviousButtonPressed() {
    this.queueService.previousPage();
  }
}
