import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DefaultService, TaskOutputItems } from 'language-tasks-swagger-client';
import { Store, StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { LanguageTasksModule } from '../language-tasks.module';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  PaginatePipe,
  PaginationModule,
} from 'src/app/shared-components/pagination/pagination.module';
import { CommentsPanelService } from 'src/app/shared-components/comments-panel/comments-panel.service';
import { UserService } from 'src/app/shared-components/user.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let commentsPanelService: CommentsPanelService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        HttpClientTestingModule,
        RouterTestingModule,
        PaginationModule,
        LanguageTasksModule,
      ],
      // declarations: [HomeComponent, PaginatePipe],
      providers: [Store, DefaultService, CommentsPanelService, UserService],
    }).compileComponents();
    commentsPanelService = TestBed.get(CommentsPanelService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change language tasks tab', () => {
    component.selectTab('all');
    fixture.detectChanges();

    expect(component.selectedTab).toEqual('all');

    component.selectTab('assigned_me');
    fixture.detectChanges();

    expect(component.selectedTab).toEqual('assigned_me');

    component.selectTab('pending');
    fixture.detectChanges();

    expect(component.selectedTab).toEqual('pending');

    component.selectTab('active');
    fixture.detectChanges();

    expect(component.selectedTab).toEqual('active');

    component.selectTab('done');
    fixture.detectChanges();

    expect(component.selectedTab).toEqual('done');
  });

  it('should call onPageChange function', () => {
    component.onPageChange(2);
    fixture.detectChanges();

    expect(component.currentPage).toEqual(2);
  });

  it('should call onPageCountChange function', () => {
    component.onPageCountChange(15);
    fixture.detectChanges();

    expect(component.countPerPage).toEqual(15);
  });

  it('should open comment panel', () => {
    let task: TaskOutputItems = {
      queueItem: {
        contentId: 'content',
      },
    };

    let spy = spyOn(commentsPanelService, 'show');

    component.openCommentsPanel(task);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
});
