import { TestBed } from '@angular/core/testing';

import { PusherService } from './pusher.service';

describe('PusherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PusherService = TestBed.get(PusherService);
    expect(service).toBeTruthy();
  });
});
