import { Component, OnInit } from '@angular/core';
import { Campaign } from '../shared/campaign';
import { CampaignService } from '../shared/campaign.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-campaign-info',
  templateUrl: './campaign-info.component.html',
  styleUrls: ['./campaign-info.component.scss']
})
export class CampaignInfoComponent implements OnInit {

  public campaign:Campaign = null;

  constructor(private campaignService: CampaignService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.paramMap.pipe(
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

  statusColor(status:string){
    let colors = {
      'mat-primary' : status === 'Delivering',
      'mat-warn' : status === 'Ended',
      'mat-disabled' : status === 'Scheduled',
    };

    return colors;
  }  

}
