import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Example } from '../example/example';
import { ITopic, Language } from '../interfaces';
import { ExampleService } from '../example/example.service';
import { UserService } from '../user.service';

@Component({
  selector: 'mod-example-list',
  templateUrl: './example-list.component.html',
})
export class ExampleListComponent implements OnInit {
  @Input() clientId?: number;
  @Input() highlightText?: string | string[] = [];
  @Input() language?: Language;
  @Input() readOnly? = true;
  @Input() searchText: string;
  @Input() showTopics? = true;

  @Output() exampleDeleted = new EventEmitter<string>();
  @Output() exampleRedacted = new EventEmitter<string>();
  @Output() riskChanged = new EventEmitter<ITopic>();
  @Output() topicsUpdated = new EventEmitter<ITopic[]>();

  error: Error;
  examples: Example[] = [];
  offset = 0;
  limit = 10;
  total = 0;
  loading = false;
  gotAllExamples = false;

  constructor(
    private exampleService: ExampleService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getExamples();
  }

  async getExamples(offset?: number, limit?: number): Promise<void> {
    this.loading = true;

    const clientId = this.clientId || this.userService.preferences.lastClientId;
    const language = this.language || {
      language: this.userService.preferences.language,
    };

    try {
      const res = await this.exampleService.searchExamples(
        this.searchText,
        language,
        clientId,
        offset || this.offset,
        limit || this.limit
      );

      this.total = res.total;
      const examples = (res?.items || []).filter(({ data }) => {
        return !this.examples.some(
          (example) => example.data.text === data.text
        );
      });

      this.examples = this.examples.concat(examples);

      this.gotAllExamples = this.examples.length >= this.total;
    } catch (error) {
      this.error = error;
    } finally {
      this.loading = false;
    }
  }

  async moreExamples() {
    if (this.gotAllExamples) return;
    this.offset += this.limit;

    await this.getExamples(this.offset, this.limit);
  }
}
