import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsPanelComponent } from './comments-panel.component';
import { DefaultService } from 'language-tasks-swagger-client';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommentItemComponent } from '../comment-item/comment-item.component';
import { FormsModule } from '@angular/forms';
import { CommentsPanelService } from './comments-panel.service';

describe('CommentsPanelComponent', () => {
  let component: CommentsPanelComponent;
  let fixture: ComponentFixture<CommentsPanelComponent>;
  let commentsPanelService: CommentsPanelService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [CommentsPanelComponent, CommentItemComponent],
      providers: [DefaultService, CommentsPanelService],
    }).compileComponents();
    commentsPanelService = TestBed.get(CommentsPanelService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsPanelComponent);
    component = fixture.componentInstance;
    const queueId = 'task';
    const contentId = 'content';
    component.queueId = queueId;
    component.contentId = contentId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close panel', () => {
    const spy = jest.spyOn(commentsPanelService, 'hide');
    component.cancelPanel();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});
