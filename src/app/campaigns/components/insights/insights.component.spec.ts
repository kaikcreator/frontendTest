import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InsightsComponent } from './insights.component';
import { MatCardModule } from '@angular/material';
import { Component, DebugElement } from '@angular/core';
import { Insights } from '../../models/insights';

describe('InsightsComponent', () => {
  let component: InsightsComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let testHostComponent: TestHostComponent;
  let componentDe: DebugElement;
  const testInsights = new Insights({
    impressions: 1,
    clicks: 2,
    websiteVisits: 3,
    nanosScore: 4,
    costPerClick: 5,
    clickThroughRate: 6,
    advancedKpi_1: 7,
    advancedKpi_2: 8,
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightsComponent, TestHostComponent ],
      imports: [ MatCardModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
    componentDe = fixture.debugElement.query(By.directive(InsightsComponent));
    component = componentDe.componentInstance;
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('should have undefined insights by default', () => {
    expect(component.insights).toBeUndefined();
  });

  it('should display an empty card if there`s no insights', () => {
    const content = componentDe.nativeElement.querySelector('mat-card');
    expect(content.children.length).toEqual(0);
  });

  it('should update insights input based on the received input', () => {
    testHostComponent.testInsights = testInsights;
    fixture.detectChanges();
    expect(component.insights).toEqual(testInsights);
  });

  it('should display a card with several items if there`s some insights property', () => {
    testHostComponent.testInsights = testInsights;
    fixture.detectChanges();
    const rows = componentDe.nativeElement.querySelectorAll('.insights-row');
    expect(rows.length).toEqual(8);
    expect(rows[0].textContent).toContain(`Impressions: ${testInsights.impressions}`);
    expect(rows[1].textContent).toContain(`Clicks: ${testInsights.clicks}`);
    expect(rows[2].textContent).toContain(`Website Visits: ${testInsights.websiteVisits}`);
    expect(rows[3].textContent).toContain(`Nanos score: ${testInsights.nanosScore}`);
    expect(rows[4].textContent).toContain(`Cost per click: ${testInsights.costPerClick}`);
    expect(rows[5].textContent).toContain(`Click through rate: ${testInsights.clickThroughRate}`);
    expect(rows[6].textContent).toContain(`Advanced KPI 1: ${testInsights.advancedKpi_1}`);
    expect(rows[7].textContent).toContain(`Advanced KPI 2: ${testInsights.advancedKpi_2}`);
  });

});


@Component({
  template: `
  <app-insights [insights]="testInsights">
  </app-insights>
  `
})
class TestHostComponent {
  testInsights: Insights;
}

