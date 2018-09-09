import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformOverviewComponent } from './platform-overview.component';
import { MatCardModule, MatChipsModule } from '@angular/material';
import { StatusComponent } from '../status/status.component';

describe('PlatformOverviewComponent', () => {
  let component: PlatformOverviewComponent;
  let fixture: ComponentFixture<PlatformOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformOverviewComponent, StatusComponent ],
      imports: [ MatCardModule, MatChipsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
