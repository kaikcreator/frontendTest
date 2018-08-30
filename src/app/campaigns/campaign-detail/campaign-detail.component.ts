import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.scss']
})
export class CampaignDetailComponent implements OnInit {

  title = 'my campaign';
  
  constructor() { }

  ngOnInit() {
  }

}
