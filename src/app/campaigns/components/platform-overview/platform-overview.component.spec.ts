import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PlatformOverviewComponent } from './platform-overview.component';
import { MatCardModule, MatChipsModule } from '@angular/material';
import { StatusComponent } from '../status/status.component';
import { Component, DebugElement } from '@angular/core';
import { Platform } from '../../models/platform';
import { TargetAudiance } from '../../models/target-audience';
import { Creatives } from '../../models/creatives';
import { Insights } from '../../models/insights';
import { DatePipe } from '@angular/common';

describe('PlatformOverviewComponent', () => {
  let component: PlatformOverviewComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let componentDe: DebugElement;
  let testHostComponent: TestHostComponent;

  const startDate = new Date(Date.UTC(2018, 0, 1));
  const endDate = new Date(Date.UTC(2018, 0, 31));
  const platform = new Platform({
    status: 'Delivering',
    totalBudget: 100,
    remainingBudget: 20,
    startDate: startDate,
    endDate: endDate,
    targetAudiance: new TargetAudiance({}),
    creatives: new Creatives({}),
    insights: new Insights({})
  });


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformOverviewComponent, StatusComponent, TestHostComponent ],
      imports: [ MatCardModule, MatChipsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
    componentDe = fixture.debugElement.query(By.directive(PlatformOverviewComponent));
    component = componentDe.componentInstance;
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('should contain an undefined platform by default', () => {
    expect(component.platform).toBeUndefined();
  });

  it('should update platform based on external input', () => {
    testHostComponent.testPlatform = platform;
    fixture.detectChanges();
    expect(component.platform).toEqual(platform);
  });

  it('should display the start and end dates', () => {
    const pipe = new DatePipe('en');
    testHostComponent.testPlatform = platform;
    fixture.detectChanges();
    const dateElement = componentDe.nativeElement.querySelector('.platform-overview-date');
    const expectedDate = pipe.transform(startDate, 'M/d/yy') + ' - ' + pipe.transform(endDate, 'M/d/yy');
    expect(dateElement.textContent).toContain(expectedDate);
  });

  it('should display the total and remaining budgets', () => {
    testHostComponent.testPlatform = platform;
    fixture.detectChanges();
    const budgetElements = componentDe.nativeElement.querySelectorAll('.platform-overview-budget');
    const expectedTotal = 'Total budget: 100 €';
    const expectedRemaining = 'Remaining budget: 20 €';
    expect(budgetElements[0].textContent).toContain(expectedTotal);
    expect(budgetElements[1].textContent).toContain(expectedRemaining);
  });

  it('should display an app-status element with current status', () => {
    testHostComponent.testPlatform = platform;
    fixture.detectChanges();
    const statusComponent = componentDe.query(By.directive(StatusComponent));
    expect(statusComponent.componentInstance).toBeTruthy();
    expect(statusComponent.componentInstance.value).toEqual(platform.status);
  });

});


@Component({
  template: `
  <app-platform-overview [platform]="testPlatform">
    <div>{{testContentProjection}}</div>
  </app-platform-overview>
  `
})
class TestHostComponent {
  testPlatform: Platform;
}
