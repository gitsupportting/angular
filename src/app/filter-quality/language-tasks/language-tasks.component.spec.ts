import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageTasksComponent } from './language-tasks.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LanguageTasksComponent', () => {
  let component: LanguageTasksComponent;
  let fixture: ComponentFixture<LanguageTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, SharedComponentsModule],
      declarations: [LanguageTasksComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
