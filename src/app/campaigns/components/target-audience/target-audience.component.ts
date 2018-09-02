import { Component, OnInit, Input } from '@angular/core';
import { TargetAudiance } from '../../shared/campaign';

@Component({
  selector: 'app-target-audience',
  templateUrl: './target-audience.component.html',
  styleUrls: ['./target-audience.component.scss']
})
export class TargetAudienceComponent implements OnInit {

  @Input() targetAudience: TargetAudiance = null;
  
  constructor() { }

  ngOnInit() {
  }

}
