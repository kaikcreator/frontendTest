import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledChipsComponent } from './labeled-chips.component';

describe('LabeledChipsComponent', () => {
  let component: LabeledChipsComponent;
  let fixture: ComponentFixture<LabeledChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledChipsComponent ]
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
