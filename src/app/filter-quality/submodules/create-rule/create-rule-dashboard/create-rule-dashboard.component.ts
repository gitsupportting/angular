import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterEvent,
  NavigationEnd,
} from '@angular/router';
import { takeWhile, filter } from 'rxjs/operators';
import { CreateRuleService } from '../create-rule.service';
import { Breadcrumb } from 'src/app/shared-components/breadcrumbs/breadcrumb.interface';

@Component({
  selector: 'ftq-create-rule-dashboard',
  templateUrl: './create-rule-dashboard.component.html',
  styleUrls: ['./create-rule-dashboard.component.less'],
})
export class CreateRuleDashboardComponent implements OnInit, OnDestroy {
  heading: string;
  inputText: string;
  isAlive: boolean;
  step = 0;
  routingArray = [
    'Fix Spelling',
    'Neighbouring Words',
    'Smart Rules',
    'Add Topics',
    'Details',
    'Flags',
    'Discussion',
    'Test',
  ];
  breadcrumbs: Breadcrumb[] = [
    {
      url: 'empty-rule',
      label: 'Create Rule',
    },
  ];
  breadcrumbsLabels: Breadcrumb[] = [
    {
      url: 'empty-rule',
      label: 'Create Empty Rule',
    },
    {
      url: 'fix-spelling',
      label: 'Fix Speling',
    },
    {
      url: 'neighbouring-words',
      label: 'Neighbouring Words',
    },
    {
      url: 'smart-rules',
      label: 'Smart Rules',
    },
    {
      url: 'add-topics',
      label: 'Add Topics',
    },
    {
      url: 'details',
      label: 'Details',
    },
    {
      url: 'flags',
      label: 'Flags',
    },
    {
      url: 'discussion',
      label: 'Discussion',
    },
    {
      url: 'test',
      label: 'Test',
    },
    {
      label: 'Create Rule',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private createRuleService: CreateRuleService
  ) {
    this.heading = 'Create Rule';
  }

  ngOnInit(): void {
    this.isAlive = true;
    this.parseUrl(location.pathname);
    this.router.events
      .pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd),
        takeWhile(() => this.isAlive)
      )
      .subscribe((res) => {
        const url = (res as NavigationEnd).urlAfterRedirects;
        this.parseUrl(url);
      });
    this.route.queryParams
      .pipe(takeWhile(() => this.isAlive))
      .subscribe((params) => {
        if (params && params.text) {
          this.inputText = params.text;
        } else {
          this.router.navigate(['./empty-rule'], {
            relativeTo: this.route,
          });
        }
      });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  findStep(route: string): number {
    return this.createRuleService.getRouteStep(route);
  }

  parseUrl(url: string): void {
    if (url) {
      this.breadcrumbs = [
        {
          url: 'empty-rule',
          label: 'Create Rule',
        },
      ];
      const urlArray = url.split('/').filter((el) => el !== '');
      urlArray.map((el) => {
        const breadcrumb = this.breadcrumbsLabels.find(
          (breadcrumb) => el.indexOf(breadcrumb.url) > -1
        );
        const label = breadcrumb ? breadcrumb.label : '';
        if (label !== '') {
          this.breadcrumbs.push({ url: el, label: label });
        }
      });
      const lastRoute = urlArray[urlArray.length - 1];
      if (lastRoute) {
        const routeWithoutParams = lastRoute.split('?')[0] || null;
        this.step = this.findStep(routeWithoutParams);
      }
    }
  }

  onEdit(): void {
    this.createRuleService.navigateFirstStep(this.route, this.inputText);
  }

  onNavigate(step: number): void {
    if (Number.isInteger(step)) {
      this.createRuleService.navigateSelectedStep(
        this.route,
        this.inputText,
        step
      );
    }
  }
}
