import { TestBed } from '@angular/core/testing';

import { SportscarsService } from './sportscars.service';

describe('SportscarsService', () => {
  let service: SportscarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportscarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
