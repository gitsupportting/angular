import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsPanelService {
  private readonly commentsPanelObject$ = new BehaviorSubject<CommentsPanelData>(null);

  get commentPanelObserable() {
    return this.commentsPanelObject$.asObservable();
  }

  show(data: CommentsPanelData) {
    if (!data) {
      return this.commentsPanelObject$.next({ show: false });
    }

    this.commentsPanelObject$.next({
      show: true,
      ...data,
    });
  }

  hide() {
    this.commentsPanelObject$.next({ show: false });
  }
}

export interface CommentsPanelData {
  show?: boolean;
  queueId?: string;
  contentId?: string;
  ignoreBackdropClick?: boolean;
  class?: string;
  animated?: boolean;
  data?: Record<string, any>;
}
