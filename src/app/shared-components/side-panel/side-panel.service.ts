import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidePanelService {
  private readonly sidePanelObject$ = new BehaviorSubject<SidePanelData>(null);

  get sidePanelObserable() {
    return this.sidePanelObject$.asObservable();
  }

  show(data: SidePanelData | string) {
    if (!data) {
      return this.sidePanelObject$.next({ show: false, key: '' });
    }

    if (typeof data === 'string' || data instanceof String) {
      return this.sidePanelObject$.next({ show: true, key: data as string });
    }

    this.sidePanelObject$.next({
      key: data.key as string,
      show: true,
      ...data,
    });
  }

  hide() {
    this.sidePanelObject$.next({ show: false, key: '' });
  }
}

export interface SidePanelData {
  show?: boolean;
  key: string;
  ignoreBackdropClick?: boolean;
  class?: string;
  animated?: boolean;
  data?: Record<string, any>;
}
