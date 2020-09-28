import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { CommentItemComponent } from './comment-item.component';
import { DefaultService, Comment } from 'language-tasks-swagger-client';
import { UserService } from '../user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('CommentItemComponent', () => {
  let component: CommentItemComponent;
  let fixture: ComponentFixture<CommentItemComponent>;
  let service: DefaultService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [CommentItemComponent],
      providers: [DefaultService, UserService],
    }).compileComponents();
    service = TestBed.get(DefaultService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentItemComponent);
    component = fixture.componentInstance;
    const comment: Comment = {
      moderatorId: 'test',
      resolved: true,
      commentId: 'comment',
      text: 'test',
    };
    component.comment = comment;
    component.queueId = 'task';
    component.contentId = 'content';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onEdit function', () => {
    component.isEdit = false;
    component.onEdit();
    fixture.detectChanges();
    expect(component.isEdit).toEqual(true);
  });

  it('should call onSave function', async() => {
    component.isEdit = true;
    let spy = spyOn(service, 'updateComment').and.returnValue(
      of({ success: true })
    );
    component.onSave();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(spy).toHaveBeenCalled();
    expect(component.isEdit).toEqual(false);
  });

  it('should call onDelete function', async() => {
    let spy = spyOn(service, "deleteComment").and.returnValue(
      of({success: true})
    );
    component.onDelete();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(spy).toHaveBeenCalled();
  });

  it('should call onCancel function', () => {
    component.isEdit = true;
    component.onCancel();
    fixture.detectChanges();
    expect(component.isEdit).toEqual(false);
  });

  it('should call onResolve function', async() => {
    let spy = spyOn(service, "resolveComment").and.returnValue(
      of({success: true})
    );
    component.comment = {
      resolved: true
    };
    component.onResolve();
    fixture.detectChanges();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should call onResolve function when not resolved', async() => {
    let spy = spyOn(service, "resolveComment").and.returnValue(
      of({success: true})
    );
    const comment: Comment = {
      moderatorId: 'test',
      resolved: false,
      commentId: 'comment',
      text: 'test',
    };
    component.comment = comment;
    component.onResolve();
    await fixture.whenStable();
    fixture.detectChanges();
   
    expect(spy).toHaveBeenCalled();
  });
});
