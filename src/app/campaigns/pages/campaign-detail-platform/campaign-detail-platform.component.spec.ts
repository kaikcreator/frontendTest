import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDetailPlatformComponent } from './campaign-detail-platform.component';
import { PlatformOverviewComponent } from '../../components/platform-overview/platform-overview.component';
import { TargetAudienceComponent } from '../../components/target-audience/target-audience.component';
import { CreativesComponent } from '../../components/creatives/creatives.component';
import { InsightsComponent } from '../../components/insights/insights.component';
import { StatusComponent } from '../../components/status/status.component';
import { MatCardModule, MatChipsModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LabeledChipsComponent } from '../../components/labeled-chips/labeled-chips.component';
import { CampaignDetailComponent } from '../campaign-detail/campaign-detail.component';
import { Campaign } from '../../models/campaign';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteStub } from '../../../../testing/activated-route.stub';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '../../models/platform';
import { TargetAudiance } from '../../models/target-audience';
import { Creatives } from '../../models/creatives';
import { Insights } from '../../models/insights';
import { By } from '@angular/platform-browser';
import { PageNotFoundComponent } from '../../../page-not-found/page-not-found/page-not-found.component';
import { PageNotFoundModule } from '../../../page-not-found/page-not-found.module';


describe('CampaignDetailPlatformComponent', () => {
  let component: CampaignDetailPlatformComponent;
  let fixture: ComponentFixture<CampaignDetailPlatformComponent>;
  let activatedRoute;

  const testPlatform = new Platform({
    targetAudiance: new TargetAudiance({}),
    creatives: new Creatives({}),
    insights: new Insights({})
  });
  const testCampaign = new Campaign({
    _id: 1,
    name: 'campaign 1',
    goal: 'test goal 1',
    totalBudget: 100,
    status: 'Delivering',
    platforms: {
      platform_1: {},
      platform_2: testPlatform
    }
  });

  const parentComponentStub = {
    get campaign$() {
      const data$ = cold('-x|', { x: testCampaign });
      return data$;
    }
  };

  beforeEach(async(() => {
    activatedRoute = new ActivatedRouteStub();
    TestBed.configureTestingModule({
      declarations: [ CampaignDetailPlatformComponent, PlatformOverviewComponent,
        TargetAudienceComponent, CreativesComponent, InsightsComponent, StatusComponent, LabeledChipsComponent ],
      imports: [MatCardModule, HttpClientTestingModule, MatChipsModule, PageNotFoundModule, RouterTestingModule.withRoutes([
        { path: '404', component: PageNotFoundComponent}
    ])],
      providers: [
        {provide: CampaignDetailComponent, useValue: parentComponentStub},
        {provide: ActivatedRoute, useValue: activatedRoute}, ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignDetailPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an undefined platform property by default', () => {
    expect(component.platform).toBeFalsy();
  });

  it('should get platform name from route params, and retrieve the campaign from CampaignService', () => {
    const selectedPlatform = 'platform_2';
    activatedRoute.setParamMap({platform: selectedPlatform});
    getTestScheduler().flush(); // flush the observables
    fixture.detectChanges();
    expect(component.platform).toBeDefined();
    expect(component.platform).toEqual(testPlatform);
  });

  it('should create a component for each platform property', () => {
    const selectedPlatform = 'platform_2';
    activatedRoute.setParamMap({platform: selectedPlatform});
    getTestScheduler().flush(); // flush the observables
    fixture.detectChanges();

    // check platform overview component
    const platformOverviewComponent = fixture.debugElement.query(By.directive(PlatformOverviewComponent)).componentInstance;
    expect(platformOverviewComponent.platform).toEqual(testPlatform);

    // check target audience component
    const targetAudienceComponent = fixture.debugElement.query(By.directive(TargetAudienceComponent)).componentInstance;
    expect(targetAudienceComponent.targetAudience).toEqual(testPlatform.targetAudiance);

    // check creatives component
    const creativesComponent = fixture.debugElement.query(By.directive(CreativesComponent)).componentInstance;
    expect(creativesComponent.creatives).toEqual(testPlatform.creatives);

    // check insights component
    const insightsComponent = fixture.debugElement.query(By.directive(InsightsComponent)).componentInstance;
    expect(insightsComponent.insights).toEqual(testPlatform.insights);
  });

});
