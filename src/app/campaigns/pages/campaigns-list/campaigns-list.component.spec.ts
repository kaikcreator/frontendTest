import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CampaignsListComponent } from './campaigns-list.component';
import { MatCardModule, MatToolbarModule, MatChipsModule, MatCard } from '@angular/material';
import { StatusComponent } from '../../components/status/status.component';
import { LabeledChipsComponent } from '../../components/labeled-chips/labeled-chips.component';
import { KeysArrayPipe } from '../../pipes/keys-array.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Campaign } from '../../models/campaign';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { CampaignService } from '../../services/campaign.service';



describe('CampaignsListComponent', () => {
  let component: CampaignsListComponent;
  let fixture: ComponentFixture<CampaignsListComponent>;

  const testCampaign1 = new Campaign({_id: 1, name: 'campaign 1', goal: 'test goal 1', totalBudget: 100, status: 'Delivering', platforms: {
    platform_1: {}, platform_2: {} } });
  const testCampaign2 = new Campaign({_id: 2, name: 'campaign 2', goal: 'test goal 2', totalBudget: 200, status: 'Ended', platforms: {} });
  const testCampaigns = [testCampaign1, testCampaign2];

  const testCampaignsService = {
    getCampaigns() {
      const data$ = cold('--x|', { x: testCampaigns });
      return data$;
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignsListComponent, StatusComponent, LabeledChipsComponent, KeysArrayPipe ],
      imports: [ MatCardModule, MatToolbarModule, RouterTestingModule, MatChipsModule, HttpClientTestingModule ],
      providers: [{provide: CampaignService, useValue: testCampaignsService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // OnIinit
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an undefined campaigns property by default', () => {
    expect(component.campaigns).toBeUndefined();
  });

  it('should retrieve campaigns from campaignsService and set the campaigns property', () => {
    getTestScheduler().flush(); // flush the observables
    fixture.detectChanges();
    expect(component.campaigns).toBeDefined();
    expect(component.campaigns.length).toEqual(2);
    expect(component.campaigns).toEqual(testCampaigns);
  });

  it('should not display the campaigns container if there are no campaigns', () => {
    const campaignsContainer = fixture.nativeElement.querySelector('.campaigns-container');
    expect(campaignsContainer).toBeNull();
  });

  it('should display a `No available campaigns` message if there are no campaigns', () => {
    const campaignsEmpty = fixture.nativeElement.querySelector('.campaigns-empty');
    expect(campaignsEmpty.textContent).toContain('No available campaigns at this moment');
  });

  it('should not display a `No available campaigns` message if there`s any campaign', () => {
    getTestScheduler().flush(); // flush the observables
    fixture.detectChanges();
    const campaignsEmpty = fixture.nativeElement.querySelector('.campaigns-empty');
    expect(campaignsEmpty).toBeNull();
  });

  it('should display the campaigns container when there are campaigns', () => {
    getTestScheduler().flush(); // flush the observables
    fixture.detectChanges();
    const campaignsContainer = fixture.nativeElement.querySelector('.campaigns-container');
    expect(campaignsContainer).toBeTruthy();
  });

  it('should display name, status, goal, platforms and budget of every campaign', () => {
    getTestScheduler().flush(); // flush the observables
    fixture.detectChanges();
    const campaignCardsDe = fixture.debugElement.queryAll(By.directive(MatCard));

    campaignCardsDe.forEach((campaignDe, i) => {
      // check title
      const campaignTitle = campaignDe.nativeElement.querySelector('.campaign-card-title');
      expect(campaignTitle.textContent).toContain(testCampaigns[i].name);

      // check status
      const statusComponent = campaignDe.query(By.directive(StatusComponent)).componentInstance;
      expect(statusComponent.value).toEqual(testCampaigns[i].status);

      // check goal
      const campaignGoal = campaignDe.nativeElement.querySelector('.campaign-card-goal');
      expect(campaignGoal.textContent).toContain(testCampaigns[i].goal);

      // check platforms
      const platformChipsComponent = campaignDe.query(By.css('.campaign-card-platforms')).componentInstance;
      const platformKeys =  Array.from(testCampaigns[i].platforms.keys());
      expect(platformChipsComponent.list).toEqual(platformKeys);

      // check budget
      const campaignBudget = campaignDe.nativeElement.querySelector('.campaign-card-footer');
      expect(campaignBudget.textContent).toContain(testCampaigns[i].totalBudget);

    });

  });

});
