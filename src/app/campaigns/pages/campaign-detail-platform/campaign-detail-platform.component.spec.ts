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
import { cold } from 'jasmine-marbles';
import { RouterTestingModule } from '@angular/router/testing';

const testParentStub = {
  get campaign$() {
    let testCampaign = new Campaign({_id:1, name:'test campaign', goal:'test goal', totalBudget:100, status:'Delivering', platforms:[]});
    const data$ = cold('--x|', { x: testCampaign });
    return data$;
  }
};

describe('CampaignDetailPlatformComponent', () => {
  let component: CampaignDetailPlatformComponent;
  let fixture: ComponentFixture<CampaignDetailPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignDetailPlatformComponent, PlatformOverviewComponent, 
        TargetAudienceComponent, CreativesComponent, InsightsComponent, StatusComponent, LabeledChipsComponent ],
      imports: [MatCardModule, HttpClientTestingModule, MatChipsModule, RouterTestingModule],
      providers:[{provide:CampaignDetailComponent, useValue:testParentStub}]
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
});
