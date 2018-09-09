import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsComponent } from './insights.component';
import { MatCardModule } from '@angular/material';

describe('InsightsComponent', () => {
  let component: InsightsComponent;
  let fixture: ComponentFixture<InsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightsComponent ],
      imports: [ MatCardModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
