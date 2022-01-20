import { TestBed } from '@angular/core/testing';

import { SubRedditServiceService } from './sub-reddit-service.service';

describe('SubRedditServiceService', () => {
  let service: SubRedditServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubRedditServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
