import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CampaignService } from './campaign.service';
import { Campaign } from '../models/campaign';

describe('CampaignService', () => {
  let service: CampaignService;
  let httpMock: HttpTestingController;

  const testRawCampaign_1 = {_id: 1, name: 'campaign 1', goal: 'test goal 1', totalBudget: 100, status: 'Delivering', platforms: { platform_1: {}, platform_2: {} } };
  const testRawCampaign_2 = {_id: 2, name: 'campaign 2', goal: 'test goal 2', totalBudget: 200, status: 'Ended', platforms: {} };
  const testCampaigns = [new Campaign(testRawCampaign_1), new Campaign(testRawCampaign_2)];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampaignService],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.get(CampaignService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve an array of campaigns', () => {
    service.getCampaigns().subscribe(campaigns => {
      //check fake data
      expect(campaigns).toEqual(testCampaigns);
    });
    //check that the expected URL is called
    const req = httpMock.expectOne('http://localhost:9000/campaigns', 'campaigns request');
    expect(req.request.method).toEqual('GET');
    //return fake data
    req.flush([testRawCampaign_1, testRawCampaign_2]);
    //verify that no unmatched requests are outstanding.
    httpMock.verify();

    //verify that the campaigns are stored as a property
    expect(service.campaigns).toEqual(testCampaigns);
  });

  it('should retrieve a specific campaign', () => {
    service.getCampaignById(1).subscribe(campaign => {
      //check fake data
      expect(campaign).toEqual(new Campaign(testRawCampaign_1));
    });
    //check that the expected URL is called
    const req = httpMock.expectOne('http://localhost:9000/campaigns/1', 'campaigns request');
    expect(req.request.method).toEqual('GET');
    //return fake data
    req.flush(testRawCampaign_1);
    //verify that no unmatched requests are outstanding.
    httpMock.verify();
  });

  it('should find a specific campaign in memory', () => {
    service.campaigns = testCampaigns;

    service.findCampaignById(2).subscribe(campaign => {
      expect(campaign).toEqual(new Campaign(testRawCampaign_2));
    }, fail);
  });

  it('should find a specific campaign from server if it is not available in memory', () => {

    service.findCampaignById(1).subscribe(campaign => {
      expect(campaign).toEqual(new Campaign(testRawCampaign_1));
    }, fail);
    //check that the expected URL is called
    const req = httpMock.expectOne('http://localhost:9000/campaigns/1', 'campaigns request');
    expect(req.request.method).toEqual('GET');
    //return fake data
    req.flush(testRawCampaign_1);
    //verify that no unmatched requests are outstanding.
    httpMock.verify();
  });


});
