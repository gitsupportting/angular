import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    const _selectedItem: any = {
      id: 'test',
      label: 'test',
    };
    const multiple: boolean = false;

    component.multiselect = multiple;
    component._selectedItem = _selectedItem;
    component.displayField = 'label';
    component.valueField = 'id';
    component.items = [
      {
        id: 'test1',
        label: 'test1',
      },
      {
        id: 'test2',
        label: 'test2',
      },
      {
        id: 'test3',
        label: 'test3',
      },
      {
        id: 'test4',
        label: 'test4',
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create multiple select box', () => {
    component.multiselect = true;
    component._selectedItem = [
      {
        id: 'test',
        label: 'test',
      },
    ];
    expect(component).toBeTruthy();
  });

  it('should change select value', () => {
    const _selectedItem: any = {
      id: 'test',
      label: 'test',
    };
    component.onClick(_selectedItem);
    fixture.detectChanges();
    expect(component._selectedItem).toEqual(_selectedItem);
  });

  it('should change select value for multiselect', () => {
    const _selectedItem: any = {
      id: 'test1',
      label: 'test1',
    };
    component._selectedItem = [
      {
        id: 'test',
        label: 'test',
      },
    ];
    component.multiselect = true;
    component.onClick(_selectedItem);
    fixture.detectChanges();
    expect(component._selectedItem).toEqual([
      {
        id: 'test',
        label: 'test',
      },
      {
        id: 'test1',
        label: 'test1',
      },
    ]);
  });

  it('should change select value for multiselect for remove', () => {
    const _selectedItem: any = [
      {
        id: 'test',
        label: 'test',
      },
      {
        id: 'test1',
        label: 'test1',
      },
    ];
    component._selectedItem = _selectedItem;
    component.multiselect = true;
    component.onClick(_selectedItem[0]);
    fixture.detectChanges();
    expect(component._selectedItem).toEqual([
      {
        id: 'test1',
        label: 'test1',
      },
    ]);
  });

  it('should call write value function', () => {
    const _selectedItem: any = {
      id: 'test1',
      label: 'test1',
    };
    component.writeValue('test1');
    fixture.detectChanges();
    expect(component._selectedItem).toEqual(_selectedItem);
  });

  it('should call write value function for no selected value', () => {
    const _selectedItem: any = null;
    const items = [
      {
        id: 'test1',
        label: 'test1',
      },
      {
        id: 'test2',
        label: 'test2',
      },
      {
        id: 'test3',
        label: 'test3',
      },
      {
        id: 'test4',
        label: 'test4',
      },
    ];
    component.items = items;
    component.writeValue(_selectedItem);
    fixture.detectChanges();
    expect(component._selectedItem).toEqual(items[0]);
  });

  it('should call write value function for no selected value and no items', () => {
    const _selectedItem: any = null;
    const items = [];
    component.items = items;
    component.writeValue(_selectedItem);
    fixture.detectChanges();
    expect(component._selectedItem).toEqual({});
  });

  it('should call write value function for multiselect', () => {
    const _selectedItem: any = [
      {
        id: 'test1',
        label: 'test1',
      },
    ];
    component.multiselect = true;
    component.writeValue(['test1']);
    fixture.detectChanges();
    expect(component._selectedItem).toEqual(_selectedItem);
  });

  it('should call write value function for multiselect when no selected value', () => {
    const _selectedItem: any = [];
    const items = [
      {
        id: 'test1',
        label: 'test1',
      },
      {
        id: 'test2',
        label: 'test2',
      },
      {
        id: 'test3',
        label: 'test3',
      },
      {
        id: 'test4',
        label: 'test4',
      },
    ];
    component.items = items;
    component.multiselect = true;
    component.writeValue(_selectedItem);
    fixture.detectChanges();
    expect(component._selectedItem).toEqual([items[0]]);
  });

  it('should call write value function for multiselect when no selected value and no items', () => {
    const _selectedItem: any = [];
    const items = [];
    component.items = items;
    component.multiselect = true;
    component.writeValue(_selectedItem);
    fixture.detectChanges();
    expect(component._selectedItem).toEqual([]);
  });

  it('should call register on change function', fakeAsync(() => {
    component.registerOnChange(() => {});
    fixture.detectChanges();
    tick();
    expect(component).toBeTruthy();
  }));

  it('should call register on touch function', fakeAsync(() => {
    component.registerOnTouched(() => {});
    fixture.detectChanges();
    tick();
    expect(component).toBeTruthy();
  }));

  it('should call setDisabledState function', () => {
    component.setDisabledState(false);
    fixture.detectChanges();
    expect(component.isDisabled).toEqual(false);
  });
});
