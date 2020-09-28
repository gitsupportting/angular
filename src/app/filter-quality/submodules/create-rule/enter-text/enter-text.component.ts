import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateRuleService } from '../create-rule.service';

@Component({
  selector: 'ftq-enter-text',
  templateUrl: './enter-text.component.html',
  styleUrls: ['./enter-text.component.less'],
})
export class EnterTextComponent implements OnInit, AfterViewInit {
  text: string;
  @ViewChild('textarea') inputTextarea: ElementRef;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private createRuleService: CreateRuleService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.text = params['text'];
    });
  }

  ngAfterViewInit(): void {
    this.inputTextarea.nativeElement.focus();
  }

  nextStep(): void {
    const text = this.text?.replace('\n', ' ').trim();
    if (!text) {
      return;
    }
    this.createRuleService.navigateNextStep(this.activatedRoute, text);
  }

  isTextEmpty(): boolean {
    return !this.text?.trim().length;
  }

  keyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.nextStep();
    }
  }
}
