import { TestBed, async, inject } from '@angular/core/testing';

import { FilmsGuard } from './films.guard';

describe('FilmsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmsGuard]
    });
  });

  it('should ...', inject([FilmsGuard], (guard: FilmsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
