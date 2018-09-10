import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
  <mat-chip [color]="color" disabled selected>
    {{ value }}
  </mat-chip>
  `,
  styles: []
})
export class StatusComponent implements OnInit, OnChanges {

  @Input() value: string;
  public color: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateColor();
  }

  updateColor() {
    switch (this.value) {
      case 'Delivering':
        this.color = 'primary';
        break;
      case 'Ended':
        this.color = 'warn';
        break;
      case 'Scheduled':
        this.color = 'default';
        break;
      default:
        this.color = '';
    }
  }
}
