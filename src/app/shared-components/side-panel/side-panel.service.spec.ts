import { TestBed } from '@angular/core/testing';

import { SidePanelService, SidePanelData } from './side-panel.service';

describe('SidePanelService', () => {
  let service: SidePanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidePanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Data is string', () => {
    it('should be show', () => {
      let sidePanelData: SidePanelData = null;
      service.sidePanelObserable.subscribe((data: SidePanelData) => {
        sidePanelData = data;
      });
      service.show('TopicPickRiskLevel');
      expect(sidePanelData.key).toBe('TopicPickRiskLevel');
      expect(sidePanelData.show).toBe(true);
    });

    it('should be hide', () => {
      let sidePanelData: SidePanelData = null;
      service.sidePanelObserable.subscribe((data: SidePanelData) => {
        sidePanelData = data;
      });
      service.show('');
      expect(sidePanelData.key).toBe('');
      expect(sidePanelData.show).toBe(false);
    });
  });

  describe('Data is typeof SidepanelData', () => {
    it('should be show', () => {
      let sidePanelData: SidePanelData = null;
      service.sidePanelObserable.subscribe((data: SidePanelData) => {
        sidePanelData = data;
      });
      service.show({
        key: 'TopicPickRiskLevel',
        data: {
          topics: [
            { id: 0, risk: 5 },
            { id: 5, risk: 1 },
          ],
          textSearch: 'I love you',
        },
      });
      expect(sidePanelData.key).toBe('TopicPickRiskLevel');
      expect(sidePanelData.show).toBe(true);
    });

    it('should be hide', () => {
      let sidePanelData: SidePanelData = null;
      service.sidePanelObserable.subscribe((data: SidePanelData) => {
        sidePanelData = data;
      });
      service.show({
        key: '',
        data: {
          topics: [
            { id: 0, risk: 5 },
            { id: 5, risk: 1 },
          ],
          textSearch: 'I love you',
        },
      });
      expect(sidePanelData.key).toBe('');
      expect(sidePanelData.show).toBe(true);
    });
  });
});
