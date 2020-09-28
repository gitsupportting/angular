import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationButtonsComponent } from './pagination-buttons.component';

describe('PaginationButtonsComponent', () => {
  let component: PaginationButtonsComponent;
  let fixture: ComponentFixture<PaginationButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationButtonsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#totalPages', () => {
    it('should default to 1', () => {
      expect(component.totalPages).toBe(1);
    });

    it.each([
      [10, 1, 10],
      [3, 10, 1],
      [53, 5, 11],
      [9, 2, 5],
    ])(
      'returns the total pages for %i items and %i items per page',
      (totalItems, itemsPerPage, expected) => {
        component.totalItems = totalItems;
        component.itemsPerPage = itemsPerPage;
        expect(component.totalPages).toBe(expected);
      }
    );
  });

  describe('#allPageOptions', () => {
    it.each([
      [1, [1]],
      [3, [1, 2, 3]],
      [4, [1, 2, 3, 4]],
      [10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
    ])(
      'returns an array with all values from 1 to %i inclusive',
      (totalItems, expected) => {
        component.totalItems = totalItems;
        component.itemsPerPage = 1;
        expect(component.allPageOptions).toEqual(expected);
      }
    );
  });

  describe('#paginationButtonOptions', () => {
    it.each([
      [10, 1, [1, 2, 3, 0, 10]],
      [10, 3, [1, 2, 3, 4, 0, 10]],
      [10, 5, [1, 0, 4, 5, 6, 0, 10]],
      [1, 1, [1]],
      [3, 1, [1, 2, 3]],
      [3, 3, [1, 2, 3]],
      [4, 3, [1, 2, 3, 4]],
      [99, 96, [1, 0, 95, 96, 97, 98, 99]],
      [99, 4, [1, 2, 3, 4, 5, 0, 99]],
      [99, 98, [1, 0, 97, 98, 99]],
      [4, 2, [1, 2, 3, 4]],
    ])(
      'returns button options for %i total pages, when on page %i',
      (totalItems, currentPage, expected) => {
        component.totalItems = totalItems;
        component.itemsPerPage = 1;
        component.currentPage = currentPage;
        expect(component.paginationButtonOptions).toEqual(expected);
      }
    );
  });

  describe('#onPageButtonClicked', () => {
    let onPageChanged: jest.Mock<void, [number]>;

    beforeEach(() => {
      component.totalItems = 10;
      component.itemsPerPage = 1;
      component.currentPage = 1;
      onPageChanged = jest.fn((currentPage) => {
        component.currentPage = currentPage;
      });
      component.pageChange.subscribe(onPageChanged);
    });

    it('emits the pageChange event when called with a number that is not the current page', () => {
      const newPageNumber = 3;

      component.onPageButtonClicked(newPageNumber);
      expect(onPageChanged).toHaveBeenCalledTimes(1);
      expect(onPageChanged).toHaveBeenCalledWith(newPageNumber);

      component.onPageButtonClicked(newPageNumber);
      expect(onPageChanged).toHaveBeenCalledTimes(1);
    });

    it('clamps the input value to be >= 1 and <= totalPages', () => {
      component.onPageButtonClicked(14);
      expect(onPageChanged).toHaveBeenCalledTimes(1);
      expect(onPageChanged).toHaveBeenCalledWith(10);

      component.onPageButtonClicked(-3);
      expect(onPageChanged).toHaveBeenCalledTimes(2);
      expect(onPageChanged).toHaveBeenLastCalledWith(1);
    });
  });
});
