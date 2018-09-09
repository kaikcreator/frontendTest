import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledChipsComponent } from './labeled-chips.component';
import { MatChipsModule } from '@angular/material';

describe('LabeledChipsComponent', () => {
  let component: LabeledChipsComponent;
  let fixture: ComponentFixture<LabeledChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledChipsComponent ],
      imports: [ MatChipsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
