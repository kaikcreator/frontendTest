import { Component, OnInit, Input } from '@angular/core';

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
