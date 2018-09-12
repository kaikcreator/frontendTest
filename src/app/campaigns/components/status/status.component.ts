import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

/**
 * Status component
 * 
 * This component displays a colored badge with the received status.
 * The color will change depending on the status value.
 * 
 * @example
 * <app-status value="Delivering">
 * </app-status>
 */
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
