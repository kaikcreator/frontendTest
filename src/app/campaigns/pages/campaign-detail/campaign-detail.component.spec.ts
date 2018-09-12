import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { CampaignDetailComponent } from './campaign-detail.component';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../../../../testing/activated-route.stub';
import { Campaign } from '../../models/campaign';
import { cold } from 'jasmine-marbles';
import { CampaignService } from '../../services/campaign.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';


describe('CampaignDetailComponent', () => {
  let component: CampaignDetailComponent;
  let fixture: ComponentFixture<CampaignDetailComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  let activatedRoute;

  const testCampaign = new Campaign({
    _id: 1,
    name: 'campaign 1',
    goal: 'test goal 1',
    totalBudget: 100,
    status: 'Delivering',
    platforms: {
      platform_1: {},
      platform_2: {}
    }
  });

  const testCampaignService = {
    findCampaignById(id) {
      const data$ = cold('-x|', { x: id === 1 ? testCampaign : null });
      return data$;
    }
  };

  beforeEach(async(() => {
    activatedRoute = new ActivatedRouteStub();
    TestBed.configureTestingModule({
      declarations: [ CampaignDetailComponent ],
      imports: [ CommonModule, MatToolbarModule, MatSidenavModule, MatListModule,
        MatIconModule, RouterTestingModule.withRoutes([]), HttpClientTestingModule, NoopAnimationsModule ],
      providers: [
        {provide: Router, useValue: routerSpy},
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: CampaignService, useValue: testCampaignService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CampaignDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get campaign ID from route params, and retrieve the campaign from CampaignService', () => {
    activatedRoute.setParamMap({id: 1});
    component.campaign$.subscribe(
      campaign => {
        expect(campaign).toEqual(testCampaign, 'expected campaign');
       } ,
      fail
    );
  });

  it('should redirect to 404 if campaign id is not valid', () => {
    activatedRoute.setParamMap({id: 3});
    fixture.detectChanges();
    const spy = routerSpy.navigate as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];
    expect(navArgs).toEqual(['/404']);
  });


});
