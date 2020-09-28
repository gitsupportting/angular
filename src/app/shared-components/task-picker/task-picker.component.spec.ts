import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPickerComponent } from './task-picker.component';
import { SharedComponentsModule } from '../shared-components.module';
import { StoreModule } from '@ngrx/store';

describe('TaskPickerComponent', () => {
  let component: TaskPickerComponent;
  let fixture: ComponentFixture<TaskPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), SharedComponentsModule],
      // declarations: [ TaskPickerComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call change task event', () => {
    let spy = spyOn(component.onChangeTask, 'emit');

    let task = {};
    component.selectTask(task);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
});
