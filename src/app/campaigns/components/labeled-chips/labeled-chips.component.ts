import { Component, OnInit, Input } from '@angular/core';

/**
 * LabeledChips component
 *
 * This component displays a list of items in chips format, and allows to associate a label
 * to them, using transclusion.
 *
 * @example
 * <app-labeled-chips list="['item 1', 'item 2', 'item 3']">
 *              <span>My items</span>
 * </app-labeled-chips>
 */
@Component({
  selector: 'app-labeled-chips',
  template: `
    <ng-content class="label"></ng-content>
    <mat-chip-list>
      <mat-chip disabled *ngFor="let chip of list">
        {{chip}}
      </mat-chip>
    </mat-chip-list>`,
  styleUrls: ['./labeled-chips.component.scss']
})
export class LabeledChipsComponent implements OnInit {

  @Input() list: string[];
  constructor() { }

  ngOnInit() {
  }

}
