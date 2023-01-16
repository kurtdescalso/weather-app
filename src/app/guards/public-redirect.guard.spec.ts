import { TestBed } from '@angular/core/testing';

import { PublicRedirectGuard } from './public-redirect.guard';

describe('PublicRedirectGuard', () => {
  let guard: PublicRedirectGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PublicRedirectGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
