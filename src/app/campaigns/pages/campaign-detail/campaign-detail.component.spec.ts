import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDetailComponent } from './campaign-detail.component';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CampaignDetailComponent', () => {
  let component: CampaignDetailComponent;
  let fixture: ComponentFixture<CampaignDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignDetailComponent ],
      imports: [ MatToolbarModule, MatSidenavModule, MatListModule, 
        MatIconModule, RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
