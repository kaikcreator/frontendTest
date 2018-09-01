import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../shared/campaign.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Campaign } from '../shared/campaign';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.scss']
})
export class CampaignDetailComponent implements OnInit {

  campaign: Campaign = null;
  
  constructor(private campaignService: CampaignService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap( params => {
        let idParam = params.get('id');
        let id = parseInt(idParam, 10);
        return this.campaignService.findCampaignById(id);
      })
    )
    .subscribe(campaign => {
      this.campaign = campaign;
    })
  }

}
