import { Component, OnInit, OnDestroy } from '@angular/core';
import { Platform } from '../shared/campaign';
import { CampaignDetailComponent } from '../campaign-detail/campaign-detail.component';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-campaign-platform',
  templateUrl: './campaign-platform.component.html',
  styleUrls: ['./campaign-platform.component.scss']
})
export class CampaignPlatformComponent implements OnInit, OnDestroy {

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
