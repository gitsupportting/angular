import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageButtonGroupComponent } from './language-button-group.component';

describe('LanguageButtonGroupComponent', () => {
  let component: LanguageButtonGroupComponent;
  let fixture: ComponentFixture<LanguageButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageButtonGroupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageButtonGroupComponent);
    component = fixture.componentInstance;
    let languages: Array<string> = ['All', 'en', 'fr', 'pt', 'it', 'ru'];
    component.languages = languages;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test for multiple lanugage selelct', () => {
    component.multiple = true;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should call write value function for single select', () => {
    let value = 'en';
    component.writeValue(value);
    fixture.detectChanges();
    expect(component._value).toEqual(value);
  });

  it('should call write value function for single select with no value', () => {
    let value = null;
    component.writeValue(value);
    fixture.detectChanges();
    expect(component._value).toEqual(component.languages[0]);
  });

  it('should call write value function for multiple select', () => {
    component.multiple = true;
    let value = ['en', 'fr'];
    component.writeValue(value);
    fixture.detectChanges();
    expect(component._value).toEqual(value);
  });

  it('should call selectLanguage function for single selection', () => {
    component.multiple = false;
    let selectedLang = 'en';
    component.selectLanguage(selectedLang);
    fixture.detectChanges();
    expect(component._value).toEqual(selectedLang);
  });

  it('should call selectLanguage function for multi selection', () => {
    component.multiple = true;
    component._value = [];
    let selectedLang = 'en';
    component.selectLanguage(selectedLang);
    fixture.detectChanges();
    expect(component._value).toEqual([selectedLang]);

    component.selectLanguage(selectedLang);
    fixture.detectChanges();
    expect(component._value).toEqual([]);
  });
});
