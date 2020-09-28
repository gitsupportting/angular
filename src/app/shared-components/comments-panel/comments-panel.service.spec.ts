import { TestBed } from '@angular/core/testing';

import { CommentsPanelService, CommentsPanelData } from './comments-panel.service';

describe('CommentsPanelService', () => {
  let service: CommentsPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be hide', () => {
    let commentsPanelData: CommentsPanelData = null;
    service.commentPanelObserable.subscribe((data: CommentsPanelData) => {
      commentsPanelData = data;
    });
    service.hide();
    expect(commentsPanelData.show).toBe(false);
  });

  it('should be show', () => {
    let commentsPanelData: CommentsPanelData = null;
    service.commentPanelObserable.subscribe((data: CommentsPanelData) => {
      commentsPanelData = data;
    });
    service.show({queueId: 'queue', contentId: 'content'});
    expect(commentsPanelData.queueId).toBe('queue');
    expect(commentsPanelData.contentId).toBe('content');
    expect(commentsPanelData.show).toBe(true);
  });
});
