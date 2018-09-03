import { Component, OnInit, Input } from '@angular/core';
import { Platform } from '../../shared/campaign';

@Component({
  selector: 'app-platform-overview',
  templateUrl: './platform-overview.component.html',
  styleUrls: ['./platform-overview.component.scss']
})
export class PlatformOverviewComponent implements OnInit {

  @Input() platform: Platform;
  constructor() { }

  ngOnInit() {
  }

}
