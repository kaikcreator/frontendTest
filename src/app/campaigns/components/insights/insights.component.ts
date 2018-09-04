import { Component, OnInit, Input } from '@angular/core';
import { Insights } from '../../models/insights';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {

  @Input() insights:Insights;
  constructor() { }

  ngOnInit() {
  }

}
