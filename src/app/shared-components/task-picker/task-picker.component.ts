import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskOutput, DefaultService } from 'language-tasks-swagger-client';
import { Store, select } from '@ngrx/store';
import * as LanguageTasksSeletor from 'src/app/store/reducers/language-tasks.reducers';
import * as LanguageTasksActions from 'src/app/store/actions/language-tasks.actions';

@Component({
  selector: 'mod-task-picker',
  templateUrl: './task-picker.component.html',
  styleUrls: [],
})
export class TaskPickerComponent implements OnInit {
  @Output() onChangeTask = new EventEmitter<any>();

  selectedTask: any;
  tasks: any;
  totalCount: number;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(value = null) {
    const params: LanguageTasksActions.LanguageTasksRequestInterface = {
      language: 'en',
      clientIds: [12],
      text: value,
    };

    this.store.dispatch(LanguageTasksActions.requestLanguageTasks({ params }));
    return this.store
      .pipe(select(LanguageTasksSeletor._getLanguageTasks))
      .subscribe((languageTasks: TaskOutput) => {
        this.totalCount = languageTasks ? languageTasks.total : 0;
        this.tasks =
          languageTasks && languageTasks.items
            ? languageTasks.items.map((item) => {
                return item.data;
              })
            : [];
        console.log(this.tasks);
      });
  }

  selectTask(item) {
    this.onChangeTask.emit(item);
  }
}
