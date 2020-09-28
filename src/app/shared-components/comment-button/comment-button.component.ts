import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentDetails } from 'language-tasks-swagger-client';

@Component({
  selector: 'mod-comment-button',
  templateUrl: './comment-button.component.html',
  styleUrls: [],
})
export class CommentButtonComponent {
  @Input() data: any;
  @Input() commentDetail: CommentDetails;
  @Output() handleClick = new EventEmitter<any>();

  isPanelOpen = false;

  clickEvent(): void {
    this.handleClick.emit(this.data);
  }
}
