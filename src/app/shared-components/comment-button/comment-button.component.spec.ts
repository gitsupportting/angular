import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOutputItems } from 'language-tasks-swagger-client';
import { CommentButtonComponent } from './comment-button.component';
import { CommentsPanelComponent } from '../comments-panel/comments-panel.component';
import { CommentItemComponent } from '../comment-item/comment-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CommentButtonComponent', () => {
  let component: CommentButtonComponent;
  let fixture: ComponentFixture<CommentButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule ],
      declarations: [CommentButtonComponent, CommentsPanelComponent, CommentItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentButtonComponent);
    component = fixture.componentInstance;
    component.isPanelOpen = false;
    component.commentDetail = {
      total: 5,
      unresolved: 3
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.commentDetail.unresolved).toEqual(3);
    expect(component).toBeTruthy();
  });

  it('should open comment panel', () => {
    let spy = spyOn(component.handleClick, "emit");
    component.clickEvent();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});
