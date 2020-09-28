import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DiagnoseButtonComponent } from './diagnose-button.component';
import { APP_BASE_HREF, Location } from '@angular/common';
import { routes } from 'src/app/filter-quality/diagnose/diagnose-routing.module';
import { TooltipComponent } from 'src/app/shared-components/tooltip/tooltip.component';

jest.mock('src/app/filter-quality/diagnose/diagnose.component');

describe('DiagnoseButtonComponent', () => {
  let component: DiagnoseButtonComponent;
  let fixture: ComponentFixture<DiagnoseButtonComponent>;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        RouterTestingModule.withRoutes(routes),
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
      declarations: [DiagnoseButtonComponent, TooltipComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    jest.resetModules();
    fixture = TestBed.createComponent(DiagnoseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    location = TestBed.get(Location);
    router = TestBed.get(Router);
    fixture.ngZone.run(() => {
      router.initialNavigation();
      router.navigateByUrl('');
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should be nothing happen when keySearch is empty', fakeAsync(() => {
    component.keyWord = '';
    component.onClick();
    tick(50);
    expect(location.path()).toBe('');
  }));

  it('Should be go to diagnose search page when click button on other than diagnose page', fakeAsync(() => {
    fixture.ngZone.run(() => {
      component.keyWord = 'I love the scrambled';
      component.onClick();
      tick(50);
      expect(location.path()).toBe(
        '/filter-quality/diagnose/I%2520love%2520the%2520scrambled'
      );
    });
  }));

  it('Should be append keyword to URL when click button on the diagnose page', fakeAsync(() => {
    fixture.ngZone.run(() => {
      component.keyWord = 'text1 hello';
      component.onClick();
      tick(50);
      expect(location.path()).toBe('/filter-quality/diagnose/text1%2520hello');
    });
  }));
});
