import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mod-pagination-buttons',
  templateUrl: './pagination-buttons.component.html',
  styles: [],
})
export class PaginationButtonsComponent {
  @Input() totalItems: number;
  @Input() itemsPerPage: number;
  @Input() currentPage: number;

  @Output() pageChange = new EventEmitter<number>();

  /**
   * Total number of pages
   */
  get totalPages(): number {
    if (!this.totalItems) return 1;
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  /**
   * All the available page numbers
   */
  get allPageOptions(): number[] {
    const options = [];
    for (let i = 1; i <= this.totalPages; i++) {
      options.push(i);
    }
    return options;
  }

  /**
   * All the page numbers to show as pagination buttons
   */
  get paginationButtonOptions(): number[] {
    if (this.totalPages <= 1) return [1];
    const options: number[] = [];

    const firstPageOption = Math.max(this.currentPage - 1, 1);
    for (let i = firstPageOption; i <= firstPageOption + 2; i++) {
      if (i <= this.totalPages) {
        options.push(i);
      }
    }

    if (firstPageOption > 1) {
      if (firstPageOption === 3) {
        options.unshift(2);
      } else if (firstPageOption > 3) {
        // Divider
        options.unshift(0);
      }
      options.unshift(1);
    }

    const lastPageOption = options[options.length - 1];

    if (lastPageOption < this.totalPages) {
      if (lastPageOption + 2 === this.totalPages) {
        options.push(this.totalPages - 1);
      } else if (lastPageOption + 2 < this.totalPages) {
        // Divider
        options.push(0);
      }
      options.push(this.totalPages);
    }

    return options;
  }

  /**
   * When we change the page, emit the `pageChange` event
   * @param pageNumber - The new page number to change to
   */
  onPageButtonClicked(pageNumber: number) {
    const clampedPageNumber = this.clampPageNumber(pageNumber);
    if (clampedPageNumber === this.currentPage) return;
    this.pageChange.emit(clampedPageNumber);
  }

  /**
   * Clamp a value between 1 and totalPages inclusive
   */
  private clampPageNumber(pageNumber: number) {
    let result = pageNumber;
    result = Math.max(result, 1);
    result = Math.min(result, this.totalPages);
    return result;
  }
}
