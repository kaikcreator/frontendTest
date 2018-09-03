import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Campaign } from '../shared/campaign';
import { CampaignDetailComponent } from '../campaign-detail/campaign-detail.component';


@Component({
  selector: 'app-campaign-info',
  templateUrl: './campaign-info.component.html',
  styleUrls: ['./campaign-info.component.scss']
})
export class CampaignInfoComponent implements OnInit, OnDestroy {

  public campaign:Campaign = null;
  private campaignSubscription: Subscription;

  constructor(private parent:CampaignDetailComponent) { }

  ngOnInit() {
    this.campaignSubscription = this.parent.campaign$.subscribe(campaign => this.campaign = campaign);
  }

  ngOnDestroy(){
    this.campaignSubscription.unsubscribe();
  } 

}
