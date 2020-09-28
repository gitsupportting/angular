import { Injector, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SidePanelService } from '../../shared-components/side-panel/side-panel.service';
/**
 * @description
 * The base class of all screen component of the project
 */
export abstract class AbstractSimpleBaseComponent implements OnDestroy {
  /** the rxjs subcriptions */
  private subscriptions: Subscription[] = [];

  /** the common service */
  protected activatedRoute: ActivatedRoute;
  protected router: Router;
  protected sidePanelService: SidePanelService;

  /** the common field */
  //   baseResourceUrl = environment.baseResourceUrl;

  /**
   * constructor
   * @param injector the injector to inject that class a class that have `@Injectable` marker
   */
  constructor(protected injector: Injector) {
    this.activatedRoute = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.sidePanelService = this.injector.get(SidePanelService);
  }

  rxSubscribe(
    observable: Observable<any>,
    next?: (value: any) => void,
    error?: (error: any) => void,
    complete?: () => void
  ): Subscription {
    const subscription: Subscription = observable.subscribe(
      next,
      error,
      complete
    );
    this.subscriptions.push(subscription);

    return subscription;
  }

  rxUnsubscribe(subscription: Subscription) {
    this.subscriptions = this.subscriptions.filter(
      (sub) => sub !== subscription
    );
    subscription.unsubscribe();
  }

  rxUnsubscribeAll() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }

  /**
   * on destroy view
   */
  ngOnDestroy() {
    this.rxUnsubscribeAll();
    this.sidePanelService.hide();
  }
}
