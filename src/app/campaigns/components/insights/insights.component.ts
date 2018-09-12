import { Component, OnInit, Input } from '@angular/core';
import { Insights } from '../../models/insights';

/**
 * Insights component
 *
 * This component displays a card with the insights information received as input
 */
@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {

  @Input() insights: Insights;
  constructor() { }

  ngOnInit() {
  }

}
