import { Component, OnInit, Input } from '@angular/core';
import { TargetAudiance } from '../../models/target-audience';

/**
 * TargetAudience component
 * 
 * This component displays a card with the target audience information received as input
 * 
 */
@Component({
  selector: 'app-target-audience',
  templateUrl: './target-audience.component.html',
  styleUrls: ['./target-audience.component.scss']
})
export class TargetAudienceComponent implements OnInit {

  @Input() targetAudience: TargetAudiance;

  constructor() { }

  ngOnInit() {
  }

}
