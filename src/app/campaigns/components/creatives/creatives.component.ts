import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

import { Creatives } from '../../models/creatives';

/**
 * Creatives component
 *
 * This component displays a card with the creatives information received as input
 */
@Component({
  selector: 'app-creatives',
  templateUrl: './creatives.component.html',
  styleUrls: ['./creatives.component.scss']
})
export class CreativesComponent implements OnInit {

  public imgBasePath = environment.urls.images;
  @Input() creatives: Creatives = null;

  constructor() { }

  ngOnInit() {
  }

}
