import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativesComponent } from './creatives.component';
import { MatCardModule } from '@angular/material';

describe('CreativesComponent', () => {
  let component: CreativesComponent;
  let fixture: ComponentFixture<CreativesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreativesComponent ],
      imports: [ MatCardModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
