import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CampaignService } from './campaign.service';

describe('CampaignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([CampaignService], (service: CampaignService) => {
    expect(service).toBeTruthy();
  }));
});
