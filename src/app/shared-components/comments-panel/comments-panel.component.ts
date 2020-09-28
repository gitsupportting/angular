import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  TaskOutput,
  TaskOutputItems,
  TaskInput,
  DefaultService,
  Comment,
  CommentInput,
} from 'language-tasks-swagger-client';
import { CommentsPanelService, CommentsPanelData } from './comments-panel.service';

@Component({
  selector: 'mod-comments-panel',
  templateUrl: './comments-panel.component.html',
  styleUrls: [],
})
export class CommentsPanelComponent implements OnInit {
  queueId: string;
  contentId: string;
  show = false;

  public comments: Array<Comment> = [];
  public commentText: string;

  constructor(private apiService: DefaultService, private commentsPanelService: CommentsPanelService) {}

  ngOnInit(): void {
    this.commentsPanelService.commentPanelObserable.subscribe((data: CommentsPanelData) => {
      if (data && data.show && data.queueId && data.contentId) {
        this.queueId = data.queueId;
        this.contentId = data.contentId;
        this.show = data.show;

        this.apiService
          .getComments(this.queueId, this.contentId)
          .subscribe((resp) => {
            if (resp) {
              this.comments = resp;
            }
          });
      } else {
        this.show = false;
      }
    });
  }

  cancelPanel() {
    this.commentsPanelService.hide();
  }

  submit() {
    const body: CommentInput = {};
    body.text = this.commentText;

    this.apiService
      .addComment(this.queueId, this.contentId, body)
      .subscribe((resp) => {
        if (resp) {
          this.comments.push(resp);
        }
      });
  }
}
