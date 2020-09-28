import { fakeAsync, inject, TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from '../../../shared-components/user.service';
import { User } from '../../../shared-components/user';

class MockUserService {
  user: User = {
    moderatorId: '60',
    id: '61',
    name: {
      familyName: 'testFamilyName',
      givenName: 'testGivenName',
    },
    displayName: 'testName',
    email: 'test@gmail.com',
  };
}

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: UserService,
          useClass: MockUserService,
        },
      ],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // FIXME: This shouldn't be calling the mock server
  it.skip('should checkin rule in server by post request', fakeAsync(
    inject([HttpClient], (http: HttpClient) => {
      spyOn(http, 'post').and.callFake(() => {
        return {
          pipe: () => {
            return;
          },
        };
      });
      service.checkinRule('test_rule');
      expect(http.post).toBeCalledWith(
        '/mock-api/v2/classify/text',
        {
          clientId: null,
          contentType: 'SHORT_TEXT',
          language: 'en',
          text: 'test_rule',
        },
        { observe: 'response' }
      );
    })
  ));
});
