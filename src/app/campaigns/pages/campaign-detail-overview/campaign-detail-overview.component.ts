import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Campaign } from '../../models/campaign';
import { CampaignDetailComponent } from '../campaign-detail/campaign-detail.component';


@Component({
  selector: 'app-campaign-detail-overview',
  templateUrl: './campaign-detail-overview.component.html',
  styleUrls: ['./campaign-detail-overview.component.scss']
})
export class CampaignDetailOverviewComponent implements OnInit, OnDestroy {

  public campaign: Campaign = null;
  private campaignSubscription: Subscription;

  constructor(private parent: CampaignDetailComponent) { }

  ngOnInit() {
    this.campaignSubscription = this.parent.campaign$.subscribe(campaign => this.campaign = campaign);
  }

  ngOnDestroy() {
    this.campaignSubscription.unsubscribe();
  }

}
