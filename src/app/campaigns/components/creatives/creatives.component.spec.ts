import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CreativesComponent } from './creatives.component';
import { MatCardModule } from '@angular/material';
import { Component, DebugElement } from '@angular/core';
import { Creatives } from '../../models/creatives';

describe('CreativesComponent', () => {
  let component: CreativesComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let componentDe: DebugElement;
  let testHostComponent: TestHostComponent;  

  let testCreatives = new Creatives({
    header:'header',
    header_1:'header 1',
    header_2:'header 2',
    description: 'some description',
    url: 'some url',
    image: 'some image'
  })

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreativesComponent, TestHostComponent ],
      imports: [ MatCardModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
    componentDe = fixture.debugElement.query(By.directive(CreativesComponent));
    component = componentDe.componentInstance; 
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('should contain an undefined creatives by default', () => {
    expect(component.creatives).toBeUndefined();
  });  

  it('should update creatives based on external input', () => {
    testHostComponent.testCreatives = testCreatives;
    fixture.detectChanges();
    expect(component.creatives).toEqual(testCreatives);
  }); 
  
  it('should display a card with several items if there`s some creatives property', () => {
    testHostComponent.testCreatives = testCreatives;
    fixture.detectChanges();
    let rows = componentDe.nativeElement.querySelectorAll('.creatives-right-item');
    expect(rows.length).toEqual(5);
    expect(rows[0].textContent).toContain(`Header: ${testCreatives.header}`);
    expect(rows[1].textContent).toContain(`Header 1: ${testCreatives.header_1}`);
    expect(rows[2].textContent).toContain(`Header 2: ${testCreatives.header_2}`);
    expect(rows[3].textContent).toContain(`Description: ${testCreatives.description}`);
    expect(rows[4].textContent).toContain(`Url: ${testCreatives.url}`);
  });    
});


@Component({
  template: `
  <app-creatives [creatives]="testCreatives">
    <div>{{testContentProjection}}</div>
  </app-creatives>
  `
})
class TestHostComponent {
  testCreatives: Creatives;
};
