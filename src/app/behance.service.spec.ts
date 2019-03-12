import { TestBed } from '@angular/core/testing';

import { BehanceService } from './behance.service';

import { HttpClientModule, HttpClient, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BehanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: BehanceService = TestBed.get(BehanceService);
    expect(service).toBeTruthy();
  });
});
