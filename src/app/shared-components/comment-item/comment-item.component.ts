import { Component, OnInit, Output, Input } from '@angular/core';
import {
  Comment,
  CommentInput,
  DefaultService,
} from 'language-tasks-swagger-client';
import { UserService } from '../user.service';

@Component({
  selector: 'mod-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: [],
})
export class CommentItemComponent implements OnInit {
  @Input() isSmall = false;
  @Input() comment: Comment;
  @Input() queueId: string;
  @Input() contentId: string;
  isEdit = false;
  moderatorId = 'first.last@company.com';
  isAdmin = true; //this.userService.isAdmin();

  constructor(
    private apiService: DefaultService,
    private userService: UserService
  ) {}

  ngOnInit(): void { }

  onEdit(): void {
    this.isEdit = true;
  }

  onSave(): void {
    const body: CommentInput = {};
    body.text = this.comment.text;

    this.apiService
      .updateComment(this.queueId, this.contentId, this.comment.commentId, body)
      .subscribe((resp) => {
        if (resp) {
          this.comment = resp;
          this.isEdit = false;
        }
      });
  }

  onDelete(): void {
    this.apiService
      .deleteComment(this.queueId, this.contentId, this.comment.commentId)
      .subscribe((resp) => {
        console.log(resp);
      });
  }

  onCancel(): void {
    this.isEdit = false;
  }

  onResolve(): void {
    if (this.comment.resolved) {
      return;
    }
    this.apiService
      .resolveComment(this.queueId, this.contentId, this.comment.commentId)
      .subscribe((resp) => {
        if (resp) {
          this.comment = resp;
        }
      });
  }
}
