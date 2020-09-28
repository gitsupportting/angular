import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TooltipComponent } from 'src/app/shared-components/tooltip/tooltip.component';
import { BreadcrumbsComponent } from './breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;
  const spyExecCommand = jest.fn();
  const href = 'http://localhost:4200/filter-quality/diagnose/oh shit';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BreadcrumbsComponent, TooltipComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    Object.defineProperty(document, 'execCommand', { value: spyExecCommand });
    Object.defineProperty(window, 'location', {
      value: {
        href: href,
      },
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#handleCopyUrl', () => {
    it('call execCammand method', () => {
      component.handleCopyUrl();
      expect(spyExecCommand).toHaveBeenCalledWith('copy');
    });
  });
});
