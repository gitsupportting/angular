import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DefaultService } from 'language-tasks-swagger-client';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { LanguageTasksModule } from '../language-tasks.module';
import { FilterQualityModule } from '../../filter-quality.module';
import { ActivatedRoute } from '@angular/router';
import moment from 'moment';
import { of } from 'rxjs';
import { UserService } from 'src/app/shared-components/user.service';

describe('DetailsForCreateComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let service: DefaultService;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule,
        HttpClientTestingModule,
        SharedComponentsModule,
        LanguageTasksModule,
      ],
      // declarations: [DetailsComponent],
      providers: [DefaultService, UserService],
    }).compileComponents();
    service = TestBed.get(DefaultService);
    userService = TestBed.get(UserService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save task data', async () => {
    component.pageType = 1;
    let spy = spyOn(service, 'addTaskItems').and.returnValue(
      of({ success: true })
    );
    component.onSave();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(spy).toHaveBeenCalled();
    expect(component.pageType).toEqual(0);
  });

  it('should create task data', async () => {
    component.pageType = 2;
    let spy = spyOn(service, 'addTaskItems').and.returnValue(
      of({ success: false })
    );
    component.onSave();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(spy).toHaveBeenCalled();
  });
});

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let service: DefaultService;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule,
        HttpClientTestingModule,
        SharedComponentsModule,
        LanguageTasksModule,
      ],
      providers: [
        DefaultService,
        UserService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => {
                  switch (key) {
                    case 'id':
                      return 'test';
                  }
                },
              },
            },
          },
        },
      ],
    }).compileComponents();
    service = TestBed.get(DefaultService);
    userService = TestBed.get(UserService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save task data', async () => {
    let taskFormData = {
      clientId: 'all',
      language: 'en',
      priority: 0,
      data: {
        assign: 'me',
        task: '',
        instructions: '',
        dueDate: moment(),
      },
    };
    component.pageType = 1;
    component.taskFormData = taskFormData;
    component.onSave();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should call change page type function', () => {
    component.changeTaskAction(0);
    fixture.detectChanges();

    component.changeTaskAction(1);
    fixture.detectChanges();

    expect(component.pageType).toEqual(1);
  });

  it('should test get comment function', () => {
    const spy = jest.spyOn(service, 'getComments');

    component.getComments('content');
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should test start task function', async () => {
    const meSpy = spyOn(userService, 'me').and.returnValue({

    });

    const spy = spyOn(service, 'updateItemCheckout').and.returnValue(
      of({ success: true })
    );
    component.task = {
      queueItem: {
        contentId: 'content',
      },
    };
    component.onStart();
    await fixture.whenStable();
    expect(spy).toHaveBeenCalled();
  });

  it('should test stop task function', async() => {
    const spy = spyOn(service, 'deleteItemCheckout').and.returnValue(
      of({ success: true })
    );

    component.task = {
      queueItem: {
        contentId: 'content',
      },
    };
    component.onStop();

    expect(spy).toHaveBeenCalled();
  });
});
