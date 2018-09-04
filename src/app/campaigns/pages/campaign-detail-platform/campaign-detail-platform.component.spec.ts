import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDetailPlatformComponent } from './campaign-detail-platform.component';

describe('CampaignDetailPlatformComponent', () => {
  let component: CampaignDetailPlatformComponent;
  let fixture: ComponentFixture<CampaignDetailPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignDetailPlatformComponent ]
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
