import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignPlatformComponent } from './campaign-platform.component';

describe('CampaignPlatformComponent', () => {
  let component: CampaignPlatformComponent;
  let fixture: ComponentFixture<CampaignPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
