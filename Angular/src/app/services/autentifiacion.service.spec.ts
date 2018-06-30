import { TestBed, inject } from '@angular/core/testing';

import { AutentifiacionService } from './autentifiacion.service';

describe('AutentifiacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutentifiacionService]
    });
  });

  it('should be created', inject([AutentifiacionService], (service: AutentifiacionService) => {
    expect(service).toBeTruthy();
  }));
});
