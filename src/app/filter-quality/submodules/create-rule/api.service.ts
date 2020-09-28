import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { INeighboringWords } from './classes';
import { UserService } from 'src/app/shared-components/user.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private userService: UserService) {}

  public checkinRule(text: string): Observable<any> {
    return this.http
      .post(
        // FIXME: This should be calling a real endpoint
        environment.mockBaseUrl + `/classifyText/2.0.1/classify/text`,
        {
          clientId: (this.userService.user.config || { allowedClients: [null] })
            .allowedClients[0],
          language: 'en',
          text: text,
          contentType: 'SHORT_TEXT',
        },
        {
          observe: 'response',
        }
      )
      .pipe(map((res) => res.body));
  }

  checkinNeighboringWords(text: string): Observable<INeighboringWords> {
    let params = '?';
    if (
      this.userService.user.config &&
      this.userService.user.config.allowedLanguages
    ) {
      this.userService.user.config.allowedLanguages.map(
        (el) => (params += 'languages=' + el)
      );
    }
    params += '&clientIds=60';
    params += '&limit=10';
    return this.http.get(
      environment.apiBaseUrl + '/trending/neighbors/' + text + params
    ) as Observable<INeighboringWords>;
  }
}
