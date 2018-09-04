import { Component, OnInit, OnDestroy } from '@angular/core';
import { Platform } from '../../models/platform';
import { CampaignDetailComponent } from '../campaign-detail/campaign-detail.component';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-campaign-detail-platform',
  templateUrl: './campaign-detail-platform.component.html',
  styleUrls: ['./campaign-detail-platform.component.scss']
})
export class CampaignDetailPlatformComponent implements OnInit, OnDestroy {

  platform: Platform;
  campaignSubscription: Subscription;

  constructor(private parent:CampaignDetailComponent, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let name = params.get('platform');
      this.campaignSubscription = this.parent.campaign$.subscribe(campaign => {
        this.platform = campaign.platforms.get(name);
      })
    });
  }

  ngOnDestroy(){
    this.campaignSubscription.unsubscribe();
  }

}
