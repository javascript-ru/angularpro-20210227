import { TestBed } from '@angular/core/testing';

import { NameLibService } from './name-lib.service';

describe('NameLibService', () => {
  let service: NameLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
