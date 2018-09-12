import { Component, OnInit, OnDestroy } from '@angular/core';
import { Platform } from '../../models/platform';
import { CampaignDetailComponent } from '../campaign-detail/campaign-detail.component';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

/**
 * Campaigns Detail Platform Component
 * 
 * This component displays the details of a specific platform, of a user campaign.
 * It expects to retrieve the platform name from the url.
 * It is expected to be used inside a CampaignDetailComponent, so it will retrieve 
 * the specific campaign details from it's parent component.
 */
@Component({
  selector: 'app-campaign-detail-platform',
  templateUrl: './campaign-detail-platform.component.html',
  styleUrls: ['./campaign-detail-platform.component.scss']
})
export class CampaignDetailPlatformComponent implements OnInit, OnDestroy {

  platform: Platform;
  campaignSubscription: Subscription;

  constructor(private parent: CampaignDetailComponent, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const name = params.get('platform');
      this.campaignSubscription = this.parent.campaign$.subscribe(campaign => {
        this.platform = campaign.platforms.get(name);
      });
    });
  }

  ngOnDestroy() {
    this.campaignSubscription.unsubscribe();
  }

}
