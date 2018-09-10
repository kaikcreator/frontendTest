import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TargetAudienceComponent } from './target-audience.component';
import { MatCardModule, MatChipsModule } from '@angular/material';
import { LabeledChipsComponent } from '../labeled-chips/labeled-chips.component';
import { Component, DebugElement } from '@angular/core';
import { TargetAudiance } from '../../models/target-audience';


describe('TargetAudienceComponent', () => {
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TargetAudienceComponent;
  let componentDe: DebugElement;
  const testTargetAudience = new TargetAudiance({
    languages: ['ES', 'EN'],
    genders: ['M', 'F'],
    age: {min: 0, max: 100},
    locations: ['Spain'],
    interests: ['interest1', 'interest2'],
    keywords: ['keyword1', 'keyword2']
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetAudienceComponent, LabeledChipsComponent, TestHostComponent ],
      imports: [ MatCardModule, MatChipsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
    componentDe = fixture.debugElement.query(By.directive(TargetAudienceComponent));
    component = componentDe.componentInstance;
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('should have an undefined targetAudience by default', () => {
    expect(component.targetAudience).toBeUndefined();
  });

  it('should display an empty card if there`s no targetAudience', () => {
    const content = componentDe.nativeElement.querySelector('mat-card');
    expect(content.children.length).toEqual(0);
  });

  it('should update targetAudience input based on the received input', () => {
    testHostComponent.testTargetAudience = testTargetAudience;
    fixture.detectChanges();
    expect(component.targetAudience).toEqual(testTargetAudience);
  });

  it('should display a card with several items if there`s some targetAudience', () => {
    testHostComponent.testTargetAudience = testTargetAudience;
    fixture.detectChanges();
    const content = componentDe.nativeElement.querySelector('mat-card-content');
    expect(content.children.length).toEqual(6);

    //check app-labeled-chips content
    const labeledChips = fixture.debugElement.queryAll(By.directive(LabeledChipsComponent));
    expect(labeledChips.length).toEqual(5);
    expect(labeledChips[0].componentInstance.list).toEqual(testTargetAudience.languages);
    expect(labeledChips[1].componentInstance.list).toEqual(testTargetAudience.genders);
    expect(labeledChips[2].componentInstance.list).toEqual(testTargetAudience.locations);
    expect(labeledChips[3].componentInstance.list).toEqual(testTargetAudience.interests);
    expect(labeledChips[4].componentInstance.list).toEqual(testTargetAudience.keywords);

    //check audience age range
    const audienceRange = componentDe.nativeElement.querySelector('.target-audience-range');
    expect(audienceRange.textContent).toContain('Age range: 0 - 100');
  });

});


@Component({
  template: `
  <app-target-audience [targetAudience]="testTargetAudience">
  </app-target-audience>
  `
})
class TestHostComponent {
  testTargetAudience: TargetAudiance;
}
