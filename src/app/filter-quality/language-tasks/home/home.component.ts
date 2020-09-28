import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as LanguageTasksSeletor from 'src/app/store/reducers/language-tasks.reducers';
import * as LanguageTasksActions from 'src/app/store/actions/language-tasks.actions';
import {
  TaskOutputItems,
  TaskOutput,
  DefaultService,
} from 'language-tasks-swagger-client';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import moment from 'moment';
import { init } from '@sentry/browser';
import { CommentsPanelService } from 'src/app/shared-components/comments-panel/comments-panel.service';
import { UserService } from 'src/app/shared-components/user.service';

@Component({
  selector: 'mod-language-tasks-home',
  templateUrl: './home.component.html',
  styleUrls: [],
})
export class HomeComponent implements OnInit {
  totalCount: number;
  isCommentsPanel: boolean;
  commentQueueId: string;
  commentContentId: string;

  // tasks: Observable<Array<TaskOutputItems>>;
  tasks: Array<TaskOutputItems>;
  perPageCounts: Array<number> = [15, 50, 100, 500, 1000];
  countPerPage: number = this.perPageCounts[0];
  currentPage = 1;
  selectedTab = 'all';

  constructor(
    private readonly store: Store,
    private apiService: DefaultService,
    private commentsPanelService: CommentsPanelService,
    private userService: UserService
  ) {}

  async ngOnInit(): Promise<void> {
    // const me = await this.userService.me();
    let language = this.userService.preferences.language;
    let clientId = this.userService.preferences.lastClientId;
    const params: LanguageTasksActions.LanguageTasksRequestInterface = {
      language: language,
      clientIds: [clientId],
    };

    this.store.dispatch(LanguageTasksActions.requestLanguageTasks({ params }));
    this.store
      .pipe(select(LanguageTasksSeletor._getLanguageTasks))
      .subscribe((languageTasks: TaskOutput) => {
        this.totalCount = languageTasks ? languageTasks.total : 0;
        this.tasks = languageTasks ? languageTasks.items : [];
      });
  }

  getTaskItems(initial: boolean = false): void {
    let language = this.userService.preferences.language;
    let clientId = this.userService.preferences.lastClientId;
    const params: LanguageTasksActions.LanguageTasksRequestInterface = {
      language: language,
      clientIds: [clientId],
      limit: this.countPerPage,
      offset: initial ? 0 : (this.currentPage - 1) * this.countPerPage,
    };

    switch (this.selectedTab) {
      case 'all':
        // params.assignedToModeratorId = 'moderator';
        break;
      case 'assigned_me':
        params.assignedToModeratorId = 'moderator';
        break;
      case 'pending':
        params.checkoutAvailable = true;
        break;
      case 'active':
        params.reviewedEndDate = moment().unix();
        break;
      case 'done':
        params.checkoutAvailable = false;
        params.reviewedStartDate = 0;
        break;
      default:
        break;
    }

    this.store.dispatch(LanguageTasksActions.requestLanguageTasks({ params }));
  }

  selectTab(id): void {
    this.selectedTab = id;
    this.currentPage = 1;
    this.getTaskItems(true);
  }

  onPageChange(page) {
    console.log('page', page);
    this.currentPage = page;
    this.getTaskItems();
  }

  onPageCountChange(count): void {
    this.countPerPage = count;
    this.currentPage = 1;
    this.getTaskItems();
  }

  openCommentsPanel(task): void {
    this.commentsPanelService.show({
      queueId: 'task',
      contentId: task.queueItem.contentId
    });
  }
}
