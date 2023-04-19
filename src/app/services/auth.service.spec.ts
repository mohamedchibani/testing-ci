/* import { AuthService } from './auth.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

describe('AuthService', () => {
  let service: AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AuthService);
  });

  it('should get the data successfully', (done: DoneFn) => {
    service.getPost(1).subscribe((post: Post) => {
      expect(post.id).toEqual(1);
    });
  });
});

describe('AuthService with mock data', () => {
  //let originalTimeout: number;
  let service: AuthService;
  let httpMock: HttpTestingController;
  const postMock = {
    userId: 1,
    id: 2,
    title: 'my title',
    body: 'my body',
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });


  it('getPost must get data as expected', (done: DoneFn) => {
    service.getPost(1).subscribe((data: Post) => {
      console.log('data is', data);
      expect(data).toEqual(postMock);
    });

    const req = httpMock.expectOne(
      `https://jsonplaceholder.typicode.com/posts/1`
    );

    expect(req.request.method).toEqual('GET');

    req.flush(postMock);
    httpMock.verify();
  });
});
 */
