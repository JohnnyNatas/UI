import { TestBed } from '@angular/core/testing';

import { HomechildService } from './homechild.service';

describe('HomechildService', () => {
  let service: HomechildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomechildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
