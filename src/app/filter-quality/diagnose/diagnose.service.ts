import { Injectable } from '@angular/core';
import {
  DefaultService as ClassifyTextService,
  TextInput,
} from 'classify-text-swagger-client';
import { PolicyGuide } from 'src/constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiagnoseService {
  private readonly keyWordFromUrl$ = new BehaviorSubject<string>('');

  constructor(private classifyTextService: ClassifyTextService) {}

  // dummy policy guide
  defaultPolicyGuide: Array<PolicyGuide> = [
    {
      name: 'Global Chat',
      rules: [
        { topic: 0, riskThreshold: 6 },
        { topic: 5, riskThreshold: 5 },
      ],
    },
    {
      name: 'Private Chat',
      rules: [{ topic: 5, riskThreshold: 6 }],
    },
  ];

  search(params?: TextInput) {
    return this.classifyTextService.classifyText(params).toPromise();
  }

  getPolicyGuides() {
    // Todo: Get policy guide from Backend API
    // let return default data for now
    return this.defaultPolicyGuide;
  }

  get keyWordFromUrl() {
    return this.keyWordFromUrl$.asObservable();
  }

  updateKeyWordFromUrl(keyWord: string) {
    this.keyWordFromUrl$.next(keyWord);
  }

  /*
   * Note: If we diagnose a key-word which includes the SLASH character exp: hello/world
   * The debug page (diagnose) will catch "world" instead of "hello/world" to diagnose
   * So we have to endcode the keyword before append into the URL
   * And decode to get the raw key-word
   *
   * At the moment, you can follow the Diagnose-Button Component or the search Compoennt for more detail
   */
  encodeKeyWord(keyWord: string) {
    return encodeURIComponent(keyWord);
  }

  decodeKeyWord(keyWord: string) {
    return decodeURIComponent(keyWord);
  }
}
