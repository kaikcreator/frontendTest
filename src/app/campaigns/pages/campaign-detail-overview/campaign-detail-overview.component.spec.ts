import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDetailOverviewComponent } from './campaign-detail-overview.component';

describe('CampaignDetailOverviewComponent', () => {
  let component: CampaignDetailOverviewComponent;
  let fixture: ComponentFixture<CampaignDetailOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignDetailOverviewComponent ]
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
