import { TestBed } from '@angular/core/testing';

import { LoginchkGuard } from './loginchk.guard';

describe('LoginchkGuard', () => {
  let guard: LoginchkGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginchkGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
