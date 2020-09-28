import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class CreateRuleService {
  private routes = [
    'empty-rule',
    'fix-spelling',
    'neighbouring-words',
    'smart-rules',
    'add-topics',
    'details',
    'flags',
    'discussion',
    'test',
  ];

  constructor(private router: Router) {}

  getRoutePath(index: number): string | null {
    if (index > 0 && index < this.routes.length) {
      return this.routes[index];
    }
    return null;
  }

  getRouteStep(route: string): number | null {
    return this.routes.findIndex((el) => el === route);
  }

  navigateNextStep(activatedRoute: ActivatedRoute, text: string) {
    const currentRoute = activatedRoute.routeConfig.path;
    const index = this.getRouteStep(currentRoute);
    const nextRoutePath = this.getRoutePath(index + 1);
    if (!nextRoutePath) {
      return;
    }

    this.router.navigate([`../${nextRoutePath}`], {
      relativeTo: activatedRoute,
      queryParams: { text: text },
    });
  }

  navigateFirstStep(activatedRoute: ActivatedRoute, text: string) {
    this.router.navigate([`./`], {
      relativeTo: activatedRoute,
      queryParams: { text },
    });
  }

  navigateSelectedStep(
    activatedRoute: ActivatedRoute,
    text: string,
    index: number
  ) {
    const nextRoutePath = this.getRoutePath(index + 1);
    if (!nextRoutePath) {
      return;
    }
    this.router.navigate([`./${nextRoutePath}`], {
      relativeTo: activatedRoute,
      queryParams: { text },
    });
  }
}
