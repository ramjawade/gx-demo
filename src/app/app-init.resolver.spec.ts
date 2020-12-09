import { TestBed } from '@angular/core/testing';

import { AppInitResolver } from './app-init.resolver';

describe('AppInitResolver', () => {
  let Resolver: AppInitResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    Resolver = TestBed.inject(AppInitResolver);
  });

  it('should be created', () => {
    expect(Resolver).toBeTruthy();
  });
});
