import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleComponent } from './toggle.component';

describe('ToggleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test click event', () => {
    const spyOnChange = spyOn(component, 'onClick');
    const toggleSlider = fixture.debugElement.nativeElement.querySelector(
      '[data-test="toggle-slider"]'
    );
    toggleSlider.click();
    expect(spyOnChange).toHaveBeenCalled();
  });
});
