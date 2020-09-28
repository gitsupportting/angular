import { Injectable } from '@angular/core';
import {
  Comment,
  CommentInput,
  DefaultService,
  Rule,
} from 'rules-swagger-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RuleService {
  constructor(private ruleService: DefaultService) {}

  addComment(
    language: string,
    text: string,
    body?: CommentInput,
    clientId?: number,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Comment> {
    return this.ruleService.addComment(
      language,
      text,
      body,
      clientId,
      observe,
      reportProgress
    );
  }

  updateRule(
    language: string,
    text: string,
    body?: Rule,
    clientId?: number,
    publish?: boolean,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<Rule> {
    return this.ruleService.updateRule(
      language,
      text,
      body,
      clientId,
      publish,
      observe,
      reportProgress
    );
  }
}
