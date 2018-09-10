import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { cold, getTestScheduler } from 'jasmine-marbles';

import { CampaignDetailOverviewComponent } from './campaign-detail-overview.component';
import { MatCardModule, MatChipsModule, MatCard } from '@angular/material';
import { LabeledChipsComponent } from '../../components/labeled-chips/labeled-chips.component';
import { StatusComponent } from '../../components/status/status.component';
import { KeysArrayPipe } from '../../pipes/keys-array.pipe';
import { CampaignDetailComponent } from '../campaign-detail/campaign-detail.component';
import { Campaign } from '../../models/campaign';
import { By } from '@angular/platform-browser';


describe('CampaignDetailOverviewComponent', () => {
  let component: CampaignDetailOverviewComponent;
  let fixture: ComponentFixture<CampaignDetailOverviewComponent>;

  const testCampaign = new Campaign({_id: 1, name: 'campaign 1', goal: 'test goal 1', totalBudget: 100, status: 'Delivering', platforms: { platform_1: {}, platform_2: {} } });

  const parentComponentStub = {
    get campaign$() {
      const data$ = cold('--x|', { x: testCampaign });
      return data$;
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignDetailOverviewComponent, LabeledChipsComponent, StatusComponent, KeysArrayPipe ],
      imports: [ MatCardModule, MatChipsModule ],
      providers: [{provide: CampaignDetailComponent, useValue: parentComponentStub}]
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

  it('should have an undefined campaign property by default', () => {
    expect(component.campaign).toBeFalsy();
  });

  it('should retrieve and set campaign from campaignService', () => {
    getTestScheduler().flush(); // flush the observables
    fixture.detectChanges();
    expect(component.campaign).toBeDefined();
    expect(component.campaign).toEqual(testCampaign);
  });

  it('should not display the campaign container if there`s no campaign', () => {
    const campaignContainer = fixture.nativeElement.querySelector('.campaign-card');
    expect(campaignContainer.children.length).toBe(0);
  });

  it('should display the campaigns container when there are campaigns', () => {
    getTestScheduler().flush(); // flush the observables
    fixture.detectChanges();
    const campaignContainer = fixture.nativeElement.querySelector('.campaign-card');
    expect(campaignContainer.children.length).toBe(2);
  });

  it('should display budget, value, goal and platforms', () => {
    getTestScheduler().flush(); // flush the observables
    fixture.detectChanges();
    const campaignCardDe = fixture.debugElement.query(By.directive(MatCard));

    //check budget
    const campaignBudget = campaignCardDe.nativeElement.querySelector('.campaign-card-title');
    expect(campaignBudget.textContent).toContain(testCampaign.totalBudget);

    //check status
    const statusComponent = campaignCardDe.query(By.directive(StatusComponent)).componentInstance;
    expect(statusComponent.value).toEqual(testCampaign.status);

    //check goal
    const campaignGoal = campaignCardDe.nativeElement.querySelector('.campaign-card-goal');
    expect(campaignGoal.textContent).toContain(testCampaign.goal);

    //check platforms
    const platformChipsComponent = campaignCardDe.query(By.directive(LabeledChipsComponent)).componentInstance;
    const platformKeys =  Array.from(testCampaign.platforms.keys());
    expect(platformChipsComponent.list).toEqual(platformKeys);
  });

});
