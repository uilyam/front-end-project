import { TestBed } from '@angular/core/testing';

import { TrucksLoaderService } from './trucks-loader.service';

describe('TrucksLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrucksLoaderService = TestBed.get(TrucksLoaderService);
    expect(service).toBeTruthy();
  });
});
