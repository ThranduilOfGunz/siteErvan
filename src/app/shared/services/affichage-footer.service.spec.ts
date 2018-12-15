import { TestBed, inject } from '@angular/core/testing';

import { AffichageFooterService } from './affichage-footer.service';

describe('AffichageFooterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AffichageFooterService]
    });
  });

  it('should be created', inject([AffichageFooterService], (service: AffichageFooterService) => {
    expect(service).toBeTruthy();
  }));
});
