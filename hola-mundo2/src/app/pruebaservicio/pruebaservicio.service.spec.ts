import { TestBed, inject } from '@angular/core/testing';

import { PruebaservicioService } from './pruebaservicio.service';

describe('PruebaservicioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PruebaservicioService]
    });
  });

  it('should be created', inject([PruebaservicioService], (service: PruebaservicioService) => {
    expect(service).toBeTruthy();
  }));
});
