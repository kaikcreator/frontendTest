import { Component, OnInit, Input } from '@angular/core';
import { Creatives } from '../../models/creatives';

@Component({
  selector: 'app-creatives',
  templateUrl: './creatives.component.html',
  styleUrls: ['./creatives.component.scss']
})
export class CreativesComponent implements OnInit {

  @Input() creatives:Creatives = null;
  
  constructor() { }

  ngOnInit() {
  }

}
