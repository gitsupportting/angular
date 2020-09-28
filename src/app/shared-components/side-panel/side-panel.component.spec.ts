import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DefaultService } from 'rules-swagger-client';
import { Language } from '../../../constants';
import { ITopic } from '../interfaces';
import { SidePanelComponent } from './side-panel.component';
import { SidePanelData, SidePanelService } from './side-panel.service';

const componentInput = 'RegressionTestBoxComponent';
const sidePanelData: SidePanelData = {
  show: false,
  key: '',
};
const originTopics: ITopic[] = [
  {
    id: 1,
    risk: 1,
  },
  {
    id: 2,
    risk: 1,
  },
];
const highlightTopics = { 1: 5, 2: 5 };
const languageSelected: Language = {
  code: 'en',
  name: 'English',
  partial: false,
};

describe.skip('SidePanelComponent', () => {
  let component: SidePanelComponent;
  let fixture: ComponentFixture<SidePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, RouterModule.forRoot([])],
      declarations: [SidePanelComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        HttpClientModule,
        DefaultService,
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be show when call functionn show() and parameter equals value of input', () => {
    component.sidePanelData = sidePanelData;
    component.key = componentInput;
    const sidePanelService = new SidePanelService();
    sidePanelService.sidePanelObserable.subscribe((data: SidePanelData) => {
      if (data) {
        component.sidePanelData.show = !!data.show;
        component.sidePanelData.key = data.key;
      } else {
        component.sidePanelData.show = false;
        component.sidePanelData.key = '';
      }
    });
    sidePanelService.show('RegressionTestBoxComponent');
    expect(component.sidePanelData.show).toBe(true);
    expect(component.sidePanelData.key === component.key).toBe(true);
  });

  it('should be hide when call functionn show() and parameter not equals value of input', () => {
    component.sidePanelData = sidePanelData;
    component.key = componentInput;
    const sidePanelService = new SidePanelService();
    sidePanelService.sidePanelObserable.subscribe((data: SidePanelData) => {
      if (data) {
        component.sidePanelData.show = !!data.show;
        component.sidePanelData.key = data.key;
      } else {
        component.sidePanelData.show = false;
        component.sidePanelData.key = '';
      }
    });
    sidePanelService.show('DiagnoseComponent');
    expect(component.sidePanelData.show).toBe(true);
    expect(component.sidePanelData.key === component.key).toBe(false);
  });

  describe('#onChangeLevel', () => {
    it('Value of highLight topic equal value of params', () => {
      component.originTopics = originTopics;
      component.highlightTopics = highlightTopics;
      component.onChangeLevel({ 1: 0 });
      expect(component.highlightTopics[1]).toBe(0);
      component.onChangeLevel({ 1: 5 });
      expect(component.highlightTopics[1]).toBe(5);
      component.onChangeLevel({ 2: 7 });
      expect(component.highlightTopics[2]).toBe(7);
    });
  });

  describe('#onLanguageChanged', () => {
    it('Value of languageSelected equals param', () => {
      component.originTopics = originTopics;
      component.highlightTopics = highlightTopics;
      component.languageSelected = languageSelected;
      component.onLanguageChanged({
        code: 'ar',
        name: 'Arabic',
        partial: false,
      });
      expect(component.languageSelected.code).toBe('ar');
      expect(component.languageSelected.name).toBe('Arabic');
      expect(component.languageSelected.partial).toBe(false);
    });
  });
});
