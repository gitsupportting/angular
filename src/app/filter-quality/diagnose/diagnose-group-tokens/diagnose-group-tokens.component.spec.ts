import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { DiagnoseGroupTokensComponent } from './diagnose-group-tokens.component';
import { DefaultService } from 'classify-text-swagger-client';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MERGE_TOKEN_BOX_MINWIDTH } from 'src/constants';

const data = {
  items: [],
  textOrigin: [],
  width: 250,
};

describe('DiagnoseGroupTokensComponent', () => {
  let component: DiagnoseGroupTokensComponent;
  let fixture: ComponentFixture<DiagnoseGroupTokensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      providers: [DefaultService, { provide: APP_BASE_HREF, useValue: '/' }],
      declarations: [DiagnoseGroupTokensComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnoseGroupTokensComponent);
    component = fixture.componentInstance;
    component.data = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit()', () => {
    it('Fontsize should be 14', () => {
      component.ngOnInit();
      expect(component.fontSizeRoot).toBe(14);
    });
  });

  describe('#groupTokenWidth()', () => {
    it(`Value of width is value of input if bigger ${MERGE_TOKEN_BOX_MINWIDTH}`, () => {
      expect(component.groupTokenWidth).toBe(
        component.data.width / component.fontSizeRoot
      );
      component.data.width = 100;
      expect(component.groupTokenWidth).toBe(
        MERGE_TOKEN_BOX_MINWIDTH / component.fontSizeRoot
      );
    });
  });
});
