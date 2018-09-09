import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import { CampaignDetailOverviewComponent } from './campaign-detail-overview.component';
import { MatCardModule, MatChipsModule } from '@angular/material';
import { LabeledChipsComponent } from '../../components/labeled-chips/labeled-chips.component';
import { StatusComponent } from '../../components/status/status.component';
import { KeysArrayPipe } from '../../pipes/keys-array.pipe';
import { CampaignDetailComponent } from '../campaign-detail/campaign-detail.component';
import { Campaign } from '../../models/campaign';

const testCampaignStub = {
  get campaign$() {
    let testCampaign = new Campaign({_id:1, name:'test campaign', goal:'test goal', totalBudget:100, status:'Delivering', platforms:[]});
    const data$ = cold('--x|', { x: testCampaign });
    return data$;
  }
};

describe('CampaignDetailOverviewComponent', () => {
  let component: CampaignDetailOverviewComponent;
  let fixture: ComponentFixture<CampaignDetailOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignDetailOverviewComponent, LabeledChipsComponent, StatusComponent, KeysArrayPipe ],
      imports: [ MatCardModule, MatChipsModule ],
      providers:[{provide:CampaignDetailComponent, useValue:testCampaignStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignDetailOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
