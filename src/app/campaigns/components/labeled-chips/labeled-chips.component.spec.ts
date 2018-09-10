import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LabeledChipsComponent } from './labeled-chips.component';
import { MatChipsModule } from '@angular/material';
import { Component, DebugElement } from '@angular/core';


describe('LabeledChipsComponent', () => {
  let component: LabeledChipsComponent;
  let componentDe: DebugElement;
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledChipsComponent, TestHostComponent ],
      imports: [ MatChipsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
    componentDe = fixture.debugElement.query(By.directive(LabeledChipsComponent));
    component = componentDe.componentInstance;
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('should contain an undefined list on init', () => {
    expect(component.list).toBeUndefined();
  });

  it('should project content as first child', () => {
    const projectedContent: HTMLElement = componentDe.nativeElement.children[0];
    expect(projectedContent.textContent).toContain(testHostComponent.testContentProjection);
  });

  it('should display a list of "mat-chip" elements, one for each item in "list" input', () => {
    const testList = ['item1', 'item2', 'item3'];
    testHostComponent.testList = testList;
    fixture.detectChanges();

    const matChips = componentDe.nativeElement.querySelectorAll('mat-chip');
    expect(matChips.length).toEqual(testList.length);

    testList.forEach((item, i) => {
      expect(matChips[i].innerHTML).toContain(item);
    });
  });
});


@Component({
  template: `
  <app-labeled-chips [list]="testList">
    <div>{{testContentProjection}}</div>
  </app-labeled-chips>
  `
})
class TestHostComponent {
  testList: string[];
  testContentProjection = 'Projected content';
}
