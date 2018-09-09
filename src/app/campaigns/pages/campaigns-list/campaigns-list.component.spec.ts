import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsListComponent } from './campaigns-list.component';
import { MatCardModule, MatToolbarModule, MatChipsModule } from '@angular/material';
import { StatusComponent } from '../../components/status/status.component';
import { LabeledChipsComponent } from '../../components/labeled-chips/labeled-chips.component';
import { KeysArrayPipe } from '../../pipes/keys-array.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CampaignsListComponent', () => {
  let component: CampaignsListComponent;
  let fixture: ComponentFixture<CampaignsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignsListComponent, StatusComponent, LabeledChipsComponent, KeysArrayPipe ],
      imports: [ MatCardModule, MatToolbarModule, RouterTestingModule, MatChipsModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
