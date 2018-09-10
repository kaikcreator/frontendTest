import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { StatusComponent } from './status.component';
import { MatChipsModule } from '@angular/material';
import { Component, DebugElement } from '@angular/core';


describe('StatusComponent', () => {
  let componentDe: DebugElement;
  let testHostComponent: TestHostComponent;
  let component: StatusComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let matChip: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusComponent, TestHostComponent ],
      imports: [ MatChipsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
    componentDe = fixture.debugElement.query(By.directive(StatusComponent));
    component = componentDe.componentInstance;
    matChip = fixture.nativeElement.querySelector('mat-chip');
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('should have an empty color by default', () => {
    expect(component.color).toBe('');
  });

  it('should show an empty text by default', () => {
    expect(matChip.textContent.trim()).toBe('');
  });

  it('should update color based in value input', () => {
    //status Delivering
    let status = 'Delivering';
    let color = 'primary';
    testHostComponent.testValue = status;
    fixture.detectChanges();
    expect(component.color).toBe(color);

    //status Ended
    status = 'Ended';
    color = 'warn';
    testHostComponent.testValue = status;
    fixture.detectChanges();
    expect(component.color).toBe(color);

    //status Scheduled
    status = 'Scheduled';
    color = 'default';
    testHostComponent.testValue = status;
    fixture.detectChanges();
    expect(component.color).toBe(color);

    //unexpected status
    status = 'Unexpected';
    color = '';
    testHostComponent.testValue = status;
    fixture.detectChanges();
    expect(component.color).toBe(color);
  });

  it('should display the "value" input inside a mat-chip element', () => {
    const testValue = 'some value';
    testHostComponent.testValue = testValue;
    fixture.detectChanges();
    expect(matChip.textContent.trim()).toBe(testValue.trim());
  });


});


@Component({
  template: '<app-status [value]="testValue"></app-status>'
})
class TestHostComponent {
  testValue: string;
}
